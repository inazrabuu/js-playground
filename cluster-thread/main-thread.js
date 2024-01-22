const http = require('node:http'),
      { Worker } = require('node:worker_threads'),
      PORT = process.env.PORT || 8800

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Home Page')
  } else if (req.url === '/slow-page') {
    const worker = new Worker('./worker-thread.js')
    worker.on('message', (j) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(`Slow Page ${j}`)
    })
  }
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))