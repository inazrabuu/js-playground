const {
    open,
} = require('fs/promises')

const readFile = async () => {
    const file = await open('tmp.txt')

    // for await(const c of file.readableWebStream())
    for await (const c of file.readLines())
        console.log(c)

    await file.close()
}

// readFile()

const callAsync = () => {
    setTimeout(() => {
        console.log('First')
    }, 200)

    console.log("Second")
}

callAsync()