const mongoose = require('mongoose')

const ProvinceSchema = mongoose.Schema(
    {
        province_name: { type: String, required: [true, 'please enter province name']},
        nation: { type: Object, required: [true, 'please enter nation reference id'], ref: 'nations' } // Foreign
    },
    {
        timestamps: true
    }
)

const Province = mongoose.model('Province', ProvinceSchema)
module.exports = Province