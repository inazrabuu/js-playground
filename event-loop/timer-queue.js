setTimeout(() => console.log('Set Timeout 1'), 0)
setTimeout(() => {
  console.log('Set Timeout 2')
  process.nextTick(() => console.log(`inside Set Timeout 2: child nextTick 1`))
}, 0)
setTimeout(() => console.log('Set Timeout 3'), 0)

process.nextTick(() => console.log(`process.nextTick 1`))
process.nextTick(() => { 
  console.log(`process.nextTick 2`)
  process.nextTick(() => console.log(`inside process.nextTick 2: child nextTick 1`))
})
process.nextTick(() => console.log(`process.nextTick 3`))

Promise.resolve().then(() => console.log(`Promise then 1`))
Promise.resolve().then(() => { 
  console.log(`Promise then 2`)
  process.nextTick(() => console.log(`inside Promise then 2: child nextTick 1`))
})
Promise.resolve().then(() => console.log(`Promise then 3`))