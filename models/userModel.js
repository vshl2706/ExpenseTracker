const mongoose = require('mongoose');

// Schema design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
        type: String,
        required:[true, 'email is required and ahould be valid'],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
},
{timestamps: true}
)

// export
const userModel = mongoose.model('users', userSchema)
module.exports = userModel

