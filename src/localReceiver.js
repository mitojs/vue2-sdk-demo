import { receiveReport } from './state'
export const baseURL = new URL('./', window.location.href)
export const apiURL = new URL('api/', baseURL).href

export async function startLocalReceiver() {
  if (!('serviceWorker' in navigator)) throw new Error('Service worker unavailable')
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'mitojs:received-report')
      receiveReport(event.data.payload)
  })
  await navigator.serviceWorker.register(new URL('localReceiver.js', baseURL).href, {
    scope: baseURL.pathname
  })
  await navigator.serviceWorker.ready
  if (!navigator.serviceWorker.controller) {
    // Convert the worker lifecycle event into the startup readiness promise.
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error('Local receiver did not take control')),
        10000
      )
      navigator.serviceWorker.addEventListener(
        'controllerchange',
        () => {
          clearTimeout(timeout)
          resolve()
        },
        { once: true }
      )
    })
  }
}
