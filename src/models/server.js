import express from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
import { router as userRouter } from '../routes/user.routes.js';
import { router as authRouter} from '../routes/auth.routes.js';

config();

export class Server {
    constructor() {
        this.app = express();
        this.port = 8080;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/users', userRouter);
        this.app.use('/auth', authRouter);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })
    }
}