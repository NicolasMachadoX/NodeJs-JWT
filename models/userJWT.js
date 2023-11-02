const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs')
const userJWTSchema = Schema({

username: {
    type: String,
    required: [true,"the data it's obligatory"]
},

email: {
    type: String,
    required: [true,"the data it's obligatory"]
},

password: {
    type: String,
    required: [true,"the data it's obligatory"]
}
});

userJWTSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
};

userJWTSchema.methods.validatePassword = function (password){
    return bcrypt.compare(password, this.password);

}

module.exports = model('userJWT', userJWTSchema)