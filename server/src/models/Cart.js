const { default: mongoose } = require("mongoose");


const Cart = mongoose.model('Cart', mongoose.Schema(
    {
        user: {type: mongoose.Types.ObjectId, ref: 'users', required: [true, 'please enter user reference id']},
        product: {type: Object, ref: 'products', required: [true, 'please enter product reference']}
    },
    {
        timestamps: true
    }
))

module.exports = Cart