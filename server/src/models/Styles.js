const { default: mongoose } = require("mongoose");


const StylesSchema = mongoose.Schema(
    {
        design_style: { type: String, required: [true, 'please enter style'] }
    },
    {
        timstamps: true
    }
)

const Styles = mongoose.model('Styles', StylesSchema)
module.exports = Styles