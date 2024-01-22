const fs = require('node:fs')

fs.readFile(__filename, () => console.log('fs.readFile 1'))

process.nextTick(() => console.log(`process.nextTick 1`))
Promise.resolve().then(() => console.log(`Promise then 1`))

setTimeout(() => console.log('setTimeout 1'), 0)

setImmediate(() => console.log(`setImmediate 1`))

for (var i = 0; i < 10000; i++) {}