const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

    hotel_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    maxcount:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    rentperday:{
        type:String,
        required:true
    },
    imageurl:[],
    currentbooking: [],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

const roomModel = mongoose.model('rooms', roomSchema);

module.exports = roomModel;