import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/database.js';
import router from './routes/index.js';
import cors from 'cors';

dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
} catch (err) {
  console.log(err);
}

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log('Server running at 5000');
});
