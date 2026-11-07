const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.cjs',
  timeout: 30000,
  fullyParallel: false,
  reporter: 'list',
  use: {
    baseURL: process.env.DEMO_URL || 'http://localhost:2038/vue2-sdk-demo/',
    browserName: 'chromium',
    channel: 'chromium',
    viewport: { width: 1440, height: 1000 },
    trace: 'retain-on-failure'
  },
  webServer: process.env.DEMO_URL
    ? undefined
    : {
        command: 'node scripts/preview.mjs',
        url: 'http://localhost:2038/vue2-sdk-demo/',
        reuseExistingServer: !process.env.CI
      }
})
