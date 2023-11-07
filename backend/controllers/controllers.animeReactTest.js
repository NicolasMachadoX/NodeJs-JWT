const Collection = require('../models/AnimeReactTest');

const getAllReact = async (req,res) => {
    try {
        const collection = await Collection.find();
        return res.json(collection);
    } catch (error) {
        res.status(201).send(error);   
    }
};

const postReact = async (req,res) => {
    const {anime,character} = req.body;
    const newData = new Collection({anime,character});
    try {
        await newData.save();
        res.json({data});
    } catch (error) {
        res.status(201).send(error);   
    }
};


const deleteReact = async (req,res) => {
    try {
        const id = req.params.id;
        const collection = await Collection.deleteOne({_id: id});
        return res.json({msg: 'delete exccelent'});
    } catch (error) {
        res.status(201).send(error);   
    }
};


const updateReact = async (req,res) => {
    try {
        const body = req.body;
        const id = req.params.id;

        const collection = await Collection.findOneAndUpdate({_id: id}, body, {new:true});
        return res.json({msg: 'update exccelent'});
    } catch (error) {
        res.status(201).send(error);   
    }
};


module.exports = {

    getAllReact,
    updateReact,
    deleteReact,
    postReact
}