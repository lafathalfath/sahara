const mongoose = require('mongoose')

const CitySchema = mongoose.Schema(
    {
        city_name: { type: String, required: [true, 'please enter city name'] },
        province: { type: Object, required: [true, 'please enter province reference id'], ref: 'provinces' } // Foreign
    },
    {
        timestamps: true
    }
)

const City = mongoose.model('City', CitySchema)
module.exports = City