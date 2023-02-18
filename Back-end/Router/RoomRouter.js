const express = require('express');
// require('../db/db');
const Room = require('../Model/Room');
const router = express.Router();

router.get('/getallrooms', async(req, res)=>{
        try {
        const rooms = await Room.find({})
        res.send(rooms)
        
    } catch (error) {
         return res.status(400).json({message: error})
    }
})

module.exports = router;
