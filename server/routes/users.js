import express from 'express'
import { login, signup, addInstructor } from '../controller/auth.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login', login);
router.post('/addInstructor',addInstructor);

export default router