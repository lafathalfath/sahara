const mongoose = require('mongoose')

const usersSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'please enter username']
        },
        email: {
            type: String,
            required: [true, 'please enter your email']
        },
        firstName: {
            type: String,
            required: [true, 'please enter your first name']
        },
        lastName: {
            type: String,
            required: [true, 'please enter your last name']
        },
        gender: {
            type: Boolean,
            required: [true, 'please enter your gender']
        },
        city: {
            type: mongoose.Types.ObjectId,
            required: [true, 'please enter nation'],
            ref: "cities"
        },
        phone: {
            type: String,
            required: [true, 'please enter your phone number']
        },
        profile_image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model('Users', usersSchema)
module.exports = Users