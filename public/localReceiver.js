/* Same-origin demo receiver: works on static hosting without a backend. */
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  const api = new URL('api/', self.registration.scope)
  if (url.origin !== api.origin || !url.pathname.startsWith(api.pathname)) return
  const endpoint = url.pathname.slice(api.pathname.length)
  if (event.request.method === 'POST' && endpoint === 'report') {
    event.respondWith(
      (async () => {
        const payload = await event.request.json()
        const client = await self.clients.get(event.clientId)
        if (client) client.postMessage({ type: 'mitojs:received-report', payload })
        return new Response(JSON.stringify({ received: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      })()
    )
  } else if (event.request.method === 'GET' && (endpoint === 'success' || endpoint === 'failure')) {
    const failure = endpoint === 'failure'
    event.respondWith(
      new Response(
        JSON.stringify({ message: failure ? '本地演示服务暂不可用' : '本地演示请求已完成' }),
        { status: failure ? 500 : 200, headers: { 'Content-Type': 'application/json' } }
      )
    )
  }
})
