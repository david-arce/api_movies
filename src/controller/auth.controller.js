import { request, response } from "express";
import prisma from "../db/prisma.js";

export const login = async(req = request, res = response) => {
    const {email, password} = req.body;

    if (!password && !email) {
        return res.sendStatus(400).send("Invalid password or email");
    }

    //verifica si el correo existe en la bd
    const validaction = prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!validaction) {
        return res.sendStatus(400).send("Invalid email");
    }


    res.json({
        email,
        password
    });
};