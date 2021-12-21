import express from 'express';
import { getUsers, Login, Logout, Register, deleteUsers, updateUsers } from '../controllers/Users.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/refreshToken.js';
import { refreshTokenAdmin } from '../controllers/RefreshTokenAdmin.js';
import { getUmkm, addUmkm, getUmkmById, getUmkmSpecified, getCity, getKategori, deleteUmkm, updateUmkm } from '../controllers/Umkm.js';
import { LoginAdmin, LogoutAdmin, RegisterAdmin } from '../controllers/Admin.js';

const router = express.Router();

// User
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/users/:id', deleteUsers);
router.patch('/users/:id', updateUsers);
router.delete('/logout', Logout);

// Admin
router.get('/tokenAdmin', refreshTokenAdmin);
router.post('/registerAdmin', RegisterAdmin);
router.post('/loginAdmin', LoginAdmin);
router.delete('/logoutAdmin', LogoutAdmin);

router.get('/kategori', getKategori);
router.get('/umkm', getUmkm);
router.get('/city', getCity);
router.post('/umkm', addUmkm);
router.delete('/umkm/:id', deleteUmkm);
router.patch('/umkm/:id', updateUmkm);
router.get('/detail/:id', getUmkmById);
router.get('/search/name=:name&category=:category&city=:city', getUmkmSpecified);

export default router;
