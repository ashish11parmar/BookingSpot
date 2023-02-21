const express = require('express');
const dotenv = require('dotenv');
const mongoose =require('mongoose');
const roomsroute = require('./Router/Router');
dotenv.config({path:'../Back-end/config.env'});


const app = express();
app.use(express.json());
app.use(require('./Router/auth')); 
app.use('',roomsroute) ;

const PORT = process.env.PORT;
app.listen(PORT, ()=>{console.log(`${PORT} is runnig`);})