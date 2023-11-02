const UserJWT = require('../models/userJWT');
const jwt = require('jsonwebtoken');
const config = require('../config');


const signup = async (req,res,next)=>{
    try {
        const data = await UserJWT.find();
        const {username, email,password} = req.body;
        const user = new UserJWT({
            username,
            email,
            password
        })
        
        user.password = await user.encryptPassword(user.password);
        await user.save();

        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });

        console.log(jwt);
        console.log('user keep');
        res.json({auth: true, token})
        
    } catch (error) {
        res.status(404).json(error);
    }
};

const signin = async (req,res,next)=>{
    try {
        const data = await UserJWT.find();

        const {email,password} = req.body;

        const user = await UserJWT.findOne({email: email});

        if(!user){
            return res.status(404).send("The email doesn't exists");
        }

        const validPassword = await user.validatePassword(password);

        if(!validPassword){
            return res.status(401).json({auth: false, token: null});
        }

        const token = jwt.sign({id: user._id}, config.secret, {
           expiresIn:  60* 60 * 24
        })

        console.log('correct user');
        res.json({data: token})
        
    } catch (error) {
        res.status(404).json(error);
    }
};

const me = async (req,res,next)=>{
    try {
    
        const user = await UserJWT.findById(req.userId, {password:0});

        if(!user){
            return res.status(401).send('No user found');
        }

        res.json(user);
        
    } catch (error) {
        res.status(404).json(error);
    }
};
module.exports = {

    signup,
    signin,
    me
};