const { MongoClient } = require('mongodb');

// Replace <your_connection_string> with your actual connection string
const uri = 'mongodb+srv://Jarjajarr:jar180ok@cluster0001.shllyge.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');


        const collection = client.db('spotify-clone').collection('album');
        const query = {}; // Your query goes here

        const datatest = collection.find(query);
        const data = await datatest.toArray();

        console.log(data)
        console.log("test");
        await datatest.forEach(document => {
            console.log(document);
        });
        return data
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        await client.close()
        console.log('Connection closed');
    }
}
connect().catch(console.dir)

export default connect