const fs = require('node:fs')

const readableStream = fs.createReadStream(__filename)
readableStream.on('close', () => console.log(`this is from readableStream close event`))
readableStream.close()

setImmediate(() => console.log(`setImmediate 1`))
setTimeout(() => console.log(`setTimeout 1`), 0)
Promise.resolve().then(() => console.log('Promise then 1'))
process.nextTick(() => console.log(`process.nextTick 1`))