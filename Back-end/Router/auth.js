const express = require('express');
require('../db/db');
const User = require('../Model/User');
const router = express.Router();

//Registration page 

router.post('/register', async (req, res) => {

    const { firstname, lastname, phone, email,  password, cpassword } = req.body;

    if (!firstname, !lastname, !email, !phone, !password, !cpassword) {
        return res.status(422).json({ error: "Plz filled property" });
    }

    try {
        
      const response = await User.findOne({ email: email }) 
      if(response){
          return res.status(422).json({ error: "user alresy register" });
      }
      const user = new User({ firstname, lastname,  phone, email, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered succesfully" });
        
           
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;