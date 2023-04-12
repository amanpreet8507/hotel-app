const mongoose = require("mongoose")
const UserScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{ 
    timestamps: true
})

const UserModel = mongoose.model('User', UserScheme);
module.exports = UserModel;