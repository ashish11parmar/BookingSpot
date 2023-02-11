const express = require('express');
const dotenv = require('dotenv');
const mongoose =require('mongoose');
dotenv.config({path:'../Back-end/config.env'});


const app = express();
app.use(express.json());
app.use(require('./Router/RoomRouter'))



const PORT = process.env.PORT;
app.listen(PORT, ()=>{console.log(`${PORT} is runnig`);})