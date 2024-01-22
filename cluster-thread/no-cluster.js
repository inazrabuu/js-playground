const http = require('node:http'),
      PORT = 8800

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Home Page')
  } else if (req.url === '/slow-page') {
    for (let i = 0; i < 1000000000; i++) {}
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Slow Page')
  }
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))