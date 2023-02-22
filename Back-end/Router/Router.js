const express = require('express');
const authenticate = require('../middleware/authenticate');
// require('../db/db');
const Room = require('../Model/Room');

const router = express.Router();

router.get('/room', async(req, res)=>{
        try {
        const rooms = await Room.find({})
        res.send(rooms)
        
    } catch (error) {
         return res.status(400).json({message: error})
    }
});

router.get('/hotel',authenticate,(req, res)=>{
        res.send('about');
    })

module.exports = router;
