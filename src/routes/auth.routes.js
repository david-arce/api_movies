import {Router} from 'express';
import { login } from '../controller/auth.controller.js';

export const router = Router();

router.post('/login', login)