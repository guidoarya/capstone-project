import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/database.js';
import router from './routes/index.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import { addUmkm } from './controllers/Umkm.js';
// import addUmkm from ''

dotenv.config();
const app = express();

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, new Date().getTime() + new Date().getDay() + path.extname(file.originalname));
  },
});

const imgFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

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

const upload = multer({ storage: diskStorage, fileFilter: imgFilter, limits: { fieldSize: 10 * 1024 * 1024 } });
app.use(upload.single('gambar'));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(5000, () => {
  console.log('Server running at port: 5000');
});
