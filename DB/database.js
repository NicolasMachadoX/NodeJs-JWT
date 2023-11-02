const mongoose = require('mongoose')

const Connexion = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology: true
        })
        console.log("MONGO DB IT'S CONECTED");
    } catch (error) {
        console.log(error);
        throw new Error('DB CANT INICIALIZATE');
    }

}


module.exports = Connexion;