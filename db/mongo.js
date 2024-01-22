const mongoClient = require('mongodb').MongoClient
const connPath = `mongodb://admin:password@localhost:27017`;

(async () => {
    console.log('Start')

    try {
        const client = await mongoClient.connect(connPath)

        const db = client.db('my_db')
        const collection = db.collection('test')
        
        try {
            const res = await collection.findOne({ name: "Harvey" })
            console.log(res._id)
        } catch(err) {
            throw(err)
        } finally {
            client.close()
        }
    } catch (err) {
        throw(err)
    }

    console.log('End')
})()