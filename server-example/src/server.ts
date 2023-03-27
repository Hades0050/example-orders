import http from 'http';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors  from 'cors'
import morgan from 'morgan';
import orders from './routes/orders';
import users from './routes/users';
const app: Express = express();
dotenv.config();
app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});
//Статика VUE3
const path = __dirname + '/views/';
app.use(express.static(path));
app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });
// Роутеры
app.use('/', orders);
app.use('/', users);
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${process.env.Port}`));
//