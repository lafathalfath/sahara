const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema(
    {
        username: { type: String, required: [true, 'please enter username'] },
        email: { type: String, required: [true, 'please enter your email'] },
        password: {type: String, required: [true, 'please enter your password']},
        phone: { type: String, required: [true, 'please enter your phone number'] },
        profile_image: { type: String, required: false }
    },
    {
        timestamps: true
    }
)

const Admin = mongoose.model('Admin', AdminSchema)
module.exports = Admin