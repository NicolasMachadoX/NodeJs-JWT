const {Schema, model} = require('mongoose');

const userJWTSchema = Schema({

nombre: {
    type: String,
    required: [true,"the data it's obligatory"]
}



});


module.exports = model('userJWT', userJWTSchema)