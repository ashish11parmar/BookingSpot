const jwt = require('jsonwebtoken');
const User = require('../Model/User');
const Router = require('../Router/Router');


const authenticate =async (req, res, next) =>{

    try {

        const token = req.cookies.jwtoken;
        const verfytoken = jwt.verify(token, process.env.SECRET_KEY);

        const rootuser = await User.findOne({_id: verfytoken._id, "tokens.token":token});

        if(!rootuser){
            console.log('error in middleware');
        }

        req.token = token;
        req.rootuser = rootuser;
        req.userId = rootuser._id;
next();
        
    } catch (err) {
        // res.status(401).send('No token');
        console.log(err);
        
    }

}

module.exports = authenticate;

