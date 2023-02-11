const mongoose = require('mongoose');


const RoomSchema = mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    maxcount:{
        type:Number ,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    imageurl:[],
    currentbooking:[],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timstamps : true,})

const roommodel = mongoose.model('rooms', RoomSchema);

module.exports = roommodel;