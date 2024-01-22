const cluster = require('node:cluster'),
      http = require('node:http'),
      PORT = 8800

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`)
  cluster.fork()
  cluster.fork()
} else {
  console.log(`Worker ${process.pid} is running`)
  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Home Page')
    } else if (req.url === '/slow-page') {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Slow Page')
    }
  })
  
  server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}