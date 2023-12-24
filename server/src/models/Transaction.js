const { default: mongoose } = require("mongoose")


const Transaction = mongoose.model('Transaction', mongoose.Schema(
    {
        user: {type: mongoose.Types.ObjectId, ref: 'users', required: [true, 'please enter user reference id']},
        product: {type: mongoose.Types.ObjectId, ref: 'products', required: [true, 'please enter product reference id']},
        norek: {type: Number, required: [true, 'please enter the number']} //hash norek
    },
    {
        timestamps: true
    }
))

module.exports = Transaction