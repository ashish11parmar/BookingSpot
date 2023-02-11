const express = require('express');
require('../db/db');

const router = express.Router();

const Room = require('../Model/Room');


router.get("/room", async(req, res)=>{

    try {

        const room = await Room.find({})
        return res.json({room});
        
    } catch (error) {
        return res.status(400).json({message: error})
        
    }

});

module.exports = router;
