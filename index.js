import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.js';
import searchRoutes from './routes/search.js'

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/user', userRoutes);
app.use('/search', searchRoutes)

app.get('/', (req,res) => {
    res.send('Welcome to Quote Finder');
})

//const CONNECTION_URL = 'mongodb+srv://kieszku94:parowa12@cluster0.6u3ov.mongodb.net/Quote-Finder?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


mongoose.set('useFindAndModify', false);