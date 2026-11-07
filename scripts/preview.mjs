import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'

const root = resolve(process.env.PREVIEW_ROOT || 'docs')
const prefix = process.env.PREVIEW_PREFIX || '/vue2-sdk-demo/'
const types = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.map': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
}
createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname
  if (pathname === '/' && prefix !== '/') {
    response.writeHead(302, { Location: prefix })
    response.end()
    return
  }
  if (!pathname.startsWith(prefix)) {
    response.writeHead(404)
    response.end()
    return
  }
  let file = resolve(root, '.' + pathname.slice(prefix.length - 1))
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403)
    response.end()
    return
  }
  try {
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html')
    response.writeHead(200, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    })
    response.end(await readFile(file))
  } catch {
    response.writeHead(404)
    response.end('Not found')
  }
}).listen(Number(process.env.PORT || 2038), '127.0.0.1', () =>
  console.log('Vue 2 static preview is ready')
)
