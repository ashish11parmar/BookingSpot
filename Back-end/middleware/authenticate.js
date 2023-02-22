const jwt = require('jsonwebtoken');
const User = require('../Model/User');
const dotenv = require('dotenv');
const Router = require('../Router/Router');
dotenv.config({path:'../config.env'});


const authenticate =async (req, res, next) =>{

    try {

        // const token=req.cookies.jwtoken;
        // const verfytoken = jwt.verify(token, process.env.SECRET_KEY);

        // const rootuser = await User.findOne({_id: verfytoken._id, "tokens.token":token});

        // if(!rootuser){
        //     console.log('error in middleware');
        // }

        // req.token = token;
        // req.rootuser = rootuser;
        // req.userId = rootuser._id;

        const token=req.cookies.jwtoken;
        console.log(token)
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        console.log(verifyToken);
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})
        if(!rootUser){throw new Error("user not found")}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
next();
        
    } catch (err) {
        // res.status(401).send('No token');
        console.log(err);
        
    }

}

module.exports = authenticate;

