import prisma from "../db/prisma.js"
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
    const data = await prisma.user.findMany();
    res.json(data);
}

//getUserById
export const getUserById = async (req, res) => {
    const id = req.params.id;
    const data = await prisma.user.findUnique({
        where: {
            id
        }
    });
    res.json(data);
}

export const createUser = async (req, res) => {
    const {name, email, password, lastName, rol} = req.body;
    
    const hash = await bcrypt.hash(password, 10);
    const data = await prisma.user.create({
        data: {
            name,
            email,
            password: hash,
            lastName,
            rol
        }
    });
    res.json(data);
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const {name, email, password, lastName, rol} = req.body;
    const data = await prisma.user.update({
        where: {
            id
        },
        data: {
            name,
            email,
            password,
            lastName,
            rol
        }
    });
    res.send('User updated successfully!');
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const data = await prisma.user.delete({
        where: {
            id
        }
    });
    res.send('User deleted successfully!');
}