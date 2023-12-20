const { default: mongoose } = require("mongoose");


const ratingsSchema = mongoose.Schema(
    {
        user: {type: mongoose.Types.ObjectId, required: [true, 'please enter user'], ref: 'users'},
        product: {type: mongoose.Types.ObjectId, require: [true, 'please enter product reference id'], ref: 'products', unique: true},
        rating: {type: Number, min: 1, max: 5, required: [true, 'please enter rating']}
    },
    {
        timestamps: true
    }
)

const Ratings = mongoose.model('Ratings', ratingsSchema)
module.exports = Ratings