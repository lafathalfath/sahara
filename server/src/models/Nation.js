const mongoose = require('mongoose')

const nationSchema = mongoose.Schema(
    {
        nation_name: { type: String, required: [true, 'please enter a nation_name'] }
    },
    {
        timestamps: true
    }
)

const Nation = mongoose.model('Nation', nationSchema)

module.exports = Nation 