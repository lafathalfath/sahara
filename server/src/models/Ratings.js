const { default: mongoose } = require("mongoose");


const ratingsSchema = mongoose.Schema(
    {
        product: {type: mongoose.Types.ObjectId, require: [true, 'please enter product reference id'], ref: 'products'},
        rating: {type: Number, min: 1, max: 5, required: [true, 'please enter rating']}
    },
    {
        timestamps: true
    }
)

const Ratings = mongoose.model('Ratings', ratingsSchema)
module.exports = Ratings