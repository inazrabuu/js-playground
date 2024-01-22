const fs = require(`fs`)

fs.readFile('text.txt', (err, data) => {
  debugger

  if (err)
    throw(err)

  console.log(data)
})