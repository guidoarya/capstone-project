import express from 'express';
import { getUsers, Login, Logout, Register } from '../controllers/Users.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/refreshToken.js';
import { getUmkm, addUmkm, getUmkmById } from '../controllers/Umkm.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/umkm', getUmkm);
router.post('/umkm', verifyToken, addUmkm);
router.get('/detail/:id', getUmkmById);

export default router;
