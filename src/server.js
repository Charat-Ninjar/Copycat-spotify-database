import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();
const port = 5001;

app.use(cors())

await mongoose.connect('mongodb+srv://Jarjajarr:jar180ok@cluster0001.shllyge.mongodb.net/spotify-clone')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const albumSchema = new Schema({
  imgSrc: String,
  title: String,
  songCount: Number,
});

const albumsData = mongoose.model('album', albumSchema);

app.get('/api/getData', async (req, res) => {
  try {
    const data = await albumsData.find({})
    res.json(data);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
  } 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
