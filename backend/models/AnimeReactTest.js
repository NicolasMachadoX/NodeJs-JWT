const {Schema, model} = require('mongoose');


const animeReactSchema = Schema({

character: {
    type: String,
    required: [true,"the data it's obligatory"]
},

anime: {
    type: String,
    required: [true,"the data it's obligatory"]
}

});

module.exports = model('animeReactSchema', animeReactSchema);