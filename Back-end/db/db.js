const dotenv = require('dotenv');
const mongoose =require('mongoose');
dotenv.config({path:'../config.env'});

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URL).then(()=>{
console.log("connected");
}).catch((err)=>{
console.log(err);
})
