const express = require('express');
const dotenv = require('dotenv');
const mongoose =require('mongoose');
const roomsroute = require('./Router/Router');
const cookieParser = require('cookie-parser');
dotenv.config({path:'../Back-end/config.env'});


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(require('./Router/auth')); 
app.use('/room',roomsroute) ;

app.use((req, res, next)=>{
    res.send('Bad request...')
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{console.log(`${PORT} is runnig`);})