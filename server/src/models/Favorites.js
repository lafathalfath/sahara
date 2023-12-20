const { default: mongoose } = require("mongoose");


const favoritesSchema = mongoose.Schema(
    {
        user: {type: mongoose.Types.ObjectId, ref: 'users', required: [true, 'please enter user reference id']},
        product: {type: Object, ref: 'products', required: [true, 'please enter product']}
    },
    {
        timestamps: true
    }
)

const Favorites = mongoose.model('Favorites', favoritesSchema)
module.exports = Favorites