const UserJWT = require('../models/userJWT');

const getAll = async (req,res)=>{
    try {
        const data = await UserJWT.find();
        res.json({data: data})
        
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = {

    getAll
};