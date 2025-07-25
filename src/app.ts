import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/task-manager';
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully on this stage');
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});





