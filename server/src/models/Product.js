const { default: mongoose } = require("mongoose");


const productSchema = mongoose.Schema(
    {
        product_name: { type: String, required: [true, 'please enter product name'] },
        photo_product: { type: Array, required: [true, 'please enter photo product'] }, //hash file name
        description: {type: String, required: [true, 'please enter description product']},
        category: {type: mongoose.Types.ObjectId, required: [true, 'please enter category'], ref: 'categories'}, // forreign
        price: {type: Number, required: [true, 'please enter price of product']},
        file_psd:  {type: String, required: [true, 'please enter the file path (psd)']}, // hash file name
        mockup: {type: Array, required: [true, 'please enter the file path (mockup)']},
        style: {type: Array, required: [true, 'please enter some styles'], ref: 'styles'} // foreign
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product