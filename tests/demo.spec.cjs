const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('./')
  await expect(page.getByText('本地接收已就绪', { exact: true })).toBeVisible()
})

test('local SDK POST becomes a selectable report with its complete payload', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Vue 2 SDK 演示' })).toBeVisible()
  await expect(page.locator('iframe')).toHaveCount(0)
  await expect(page.getByText('还没有上报记录')).toBeVisible()
  const received = page.waitForResponse(
    (response) => response.url().endsWith('/api/report') && response.request().method() === 'POST'
  )
  await page.getByRole('button', { name: '手动上报', exact: true }).click()
  const response = await received
  expect(response.status()).toBe(200)
  expect(response.fromServiceWorker()).toBe(true)
  const payload = response.request().postDataJSON()
  expect(payload.data.type).toBe('LOG')
  expect(payload.data.customTag).toBe('vue2-demo')
  await expect(page.locator('.report-monitor__row')).toHaveCount(1)
  await expect(page.locator('.report-monitor__row[aria-pressed="true"]')).toContainText('vue2-demo')
  await page.getByText('原始事件 JSON', { exact: true }).click()
  await expect(page.getByTestId('report-detail')).toHaveText(
    JSON.stringify(payload, null, 2)
  )
})

test('Vue, Promise and JavaScript exceptions produce real reports without stopping interaction', async ({
  page
}) => {
  for (const [button, kind] of [
    ['Vue 组件错误', 'VUE'],
    ['Promise 异常', 'PROMISE'],
    ['JavaScript 异常', 'JS']
  ]) {
    const post = page.waitForResponse(
      (response) => response.url().endsWith('/api/report') && response.request().method() === 'POST'
    )
    await page.getByRole('button', { name: button, exact: true }).click()
    expect((await post).status()).toBe(200)
    await expect(
      page.locator('.report-monitor__row[aria-pressed="true"] .report-monitor__type')
    ).toHaveText(kind)
    if (kind === 'VUE')
      await expect(page.locator('.report-monitor__row[aria-pressed="true"]')).toContainText(
        'VueErrorDemo'
      )
    else
      await expect(
        page.locator('.report-monitor__row[aria-pressed="true"] .report-monitor__location')
      ).toContainText(/\.js:\d+:\d+/)
  }
  await page.getByRole('button', { name: '增加计数' }).click()
  await expect(page.getByTestId('counter')).toHaveText('1')
})

test('local Fetch and XHR distinguish 200 from 500 and expose independent request summaries', async ({
  page
}) => {
  for (const [transport, previousCount] of [['Fetch', 0], ['XHR', 1]]) {
    const success = page.waitForResponse((response) => response.url().endsWith('/api/success'))
    await page.getByRole('button', { name: '正常 ' + transport, exact: true }).click()
    expect((await success).status()).toBe(200)
    await expect(page.locator('.report-monitor__row')).toHaveCount(previousCount)
    const failure = page.waitForResponse((response) => response.url().endsWith('/api/failure'))
    const post = page.waitForResponse((response) => response.url().endsWith('/api/report'))
    await page.getByRole('button', { name: '异常 ' + transport, exact: true }).click()
    expect((await failure).status()).toBe(500)
    expect((await post).status()).toBe(200)
    const row = page.locator('.report-monitor__row[aria-pressed="true"]')
    await expect(row).toContainText('GET /api/failure')
    await expect(row).toContainText(transport)
    await expect(row.locator('.report-monitor__status')).toHaveText('500')
    await expect(row.locator('.report-monitor__duration')).toContainText(/\d+ ms/)
  }
  await expect(page.locator('.report-monitor__row')).toHaveCount(2)
})

test('search uses only the current event and selection follows visible reports', async ({
  page
}) => {
  await page.getByRole('button', { name: '手动上报', exact: true }).click()
  await expect(page.locator('.report-monitor__row')).toHaveCount(1)
  await page.getByRole('button', { name: '异常 Fetch', exact: true }).click()
  await expect(page.locator('.report-monitor__row')).toHaveCount(2)
  const search = page.getByRole('searchbox', { name: '搜索上报记录' })
  await search.fill('vue2-demo')
  await expect(page.locator('.report-monitor__row')).toHaveCount(1)
  await expect(page.locator('.report-monitor__details')).toContainText('vue2-demo')
  await search.fill('no-such-report')
  await expect(page.getByText('没有匹配的记录', { exact: true })).toBeVisible()
  await expect(page.locator('.report-monitor__details')).toHaveCount(0)
  await search.fill('')
  await page.locator('.report-monitor__row').last().click()
  await expect(page.locator('.report-monitor__row').last()).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('tab', { name: /行为轨迹/ }).click()
  await expect(page.locator('.report-monitor__timeline li')).not.toHaveCount(0)
  await page.getByRole('searchbox', { name: '搜索行为轨迹' }).fill('no-such-breadcrumb')
  await expect(page.getByText('没有匹配的轨迹', { exact: true })).toBeVisible()
  await page.getByRole('button', { name: '清空记录', exact: true }).click()
  await page.getByRole('tab', { name: /上报记录/ }).click()
  await expect(page.getByText('还没有上报记录')).toBeVisible()
})

test('clearing a filtered report list makes the next manual report visible', async ({ page }) => {
  await page.getByRole('button', { name: '异常 Fetch', exact: true }).click()
  await expect(page.locator('.report-monitor__row')).toHaveCount(1)
  const search = page.getByRole('searchbox', { name: '搜索上报记录' })
  await search.fill('500')
  await page.getByRole('button', { name: '清空记录', exact: true }).click()
  await expect(page.getByText('还没有上报记录')).toBeVisible()
  await page.getByRole('button', { name: '手动上报', exact: true }).click()
  await expect(page.locator('.report-monitor__row')).toHaveCount(1)
  await expect(page.locator('.report-monitor__row')).toContainText('vue2-demo')
  await expect(search).toHaveValue('')
})

test('navigation captures route behavior and 390px layout stays inside the viewport', async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: '行为轨迹', exact: true }).click()
  await expect(page).toHaveURL(/#\/behavior$/)
  await expect(page.locator('.report-monitor__timeline')).toContainText(/Route|Hash/)
  await page.getByRole('button', { name: '返回异常演示', exact: true }).click()
  await page.getByRole('button', { name: '手动上报', exact: true }).click()
  await expect(page.locator('.report-monitor__row')).toHaveCount(1)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true
  )
})

test('existing demo routes keep their scenario and behavior destinations', async ({ page }) => {
  await page.goto('./#/demo/one')
  await expect(page).toHaveURL(/#\/scenarios$/)
  await expect(page.getByRole('button', { name: '手动上报', exact: true })).toBeVisible()
  await page.goto('./#/demo/two')
  await expect(page).toHaveURL(/#\/behavior$/)
  await expect(page.getByRole('button', { name: '返回异常演示', exact: true })).toBeVisible()
})

test('the existing console instance uploads through the real local receiver', async ({ page }) => {
  expect(await page.evaluate(() => typeof window.MitoInstance?.log)).toBe('function')
  const received = page.waitForResponse(
    (response) => response.url().endsWith('/api/report') && response.request().method() === 'POST'
  )
  await page.evaluate(() => window.MitoInstance.log({ message: 'console report', tag: 'console-api' }))
  const response = await received
  expect(response.status()).toBe(200)
  expect(response.request().postDataJSON().data.message).toBe('console report')
  await expect(page.locator('.report-monitor__row')).toContainText('console-api')
})
