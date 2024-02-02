import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/user.controller.js";

export const router = express.Router();

router.get('/', getAllUsers)

router.post('/create', createUser);

router.patch('/update/:id', updateUser);

router.delete('/delete/:id', deleteUser);

//getUserById
router.get('/:id', getUserById);

