const { default: mongoose } = require("mongoose")

const categorySchema = mongoose.Schema(
    {
        category_name: { type: String, required: [true, 'please enter category name'] }
    },
    {
        timestamps: true
    }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category