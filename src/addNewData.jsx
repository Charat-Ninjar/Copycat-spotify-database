const {MongoClient, Timestamp}  = require("mongodb")
const BSON = require('bson')

const uri = 'mongodb+srv://Jarjajarr:jar180ok@cluster0001.shllyge.mongodb.net/'

const client = new MongoClient(uri, {
    useNewUrlparser:true,
    useUnifiedTopology: true,
})

const run = async () => {
    try {
        await client.connect()

        const database = client.db('spotify-clone')
        const albums = database .collection('album')
        const to = new Date()
        const album = {
            "imgSrc": "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          "title": "Liked Songs",
          "songCount": Math.floor(Math.random() * 500)
        }


        await albums.insertOne(album)
    } finally {
        await client.close()
    }
}

run().catch(console.dir)