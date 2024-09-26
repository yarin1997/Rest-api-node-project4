import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './db';
import router from './routes/userRoutes';
import cardRouter from './routes/cardRoutes';
import * as dotenv from 'dotenv';
import moment from 'moment';
import chalk from 'chalk';
import errorRoute from './routes/errorRoute';
import errorLogger from './middleware/error.logger';
import User from './models/User';
import Card from './models/Card';


const app:Application = express();
dotenv.config();
const port = process.env.Port || 5000;

app.use(express.json());
app.use(morgan((tokens, req: Request, res: Response) => {
    const status = tokens.status(req, res);
    if(!status)return;
    return [
        console.log(chalk.blue(tokens.method(req, res))),
        console.log(tokens.url(req, res)),
        +status >= 200 && +status < 400 ?(tokens.status(req, res)) :(tokens.status(req, res)),
        console.log(moment().format("YYYY-MM-DD HH:mm")),
       console.log(tokens['response-time'](req, res), 'ms'),
    ].join('')
}));

app.use(cors({
    origin: "*",
    methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/api', router)
app.use('/api', cardRouter)

app.use(express.static('public'))
app.use(errorRoute)
app.use(errorLogger);

app.listen( port,async () =>{
    await connectDB();
    console.log(chalk.yellow(`Server running on port ${port}`))
})

