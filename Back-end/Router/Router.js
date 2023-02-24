const express = require('express');
const authenticate = require('../middleware/authenticate');
// require('../db/db');

const Room = require('../Model/Room');
const { findById } = require('../Model/User');

const router = express.Router();

router.get('/', async(req, res)=>{
        try {
        const rooms = await Room.find({})
        res.send(rooms)
        
    } catch (error) {
         return res.status(400).json({message: error})
    }
});



router.get('/:id',(req, res, next)=>{
    console.log(req.params.id);
    Room.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            room:result
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    
    
});

module.exports = router;
