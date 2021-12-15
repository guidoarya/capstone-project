import express from 'express';
import { getUsers, Login, Logout, Register } from '../controllers/Users.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/refreshToken.js';
import { getUmkm, addUmkm, getUmkmById, getUmkmSpecified } from '../controllers/Umkm.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/umkm', getUmkm);
router.post('/umkm', addUmkm);
router.get('/detail/:id', getUmkmById);
router.get('/search/name=:name&category=:category&city=:city', getUmkmSpecified);
export default router;
