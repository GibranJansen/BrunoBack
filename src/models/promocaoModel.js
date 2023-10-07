const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promocaoSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    desconto: {type: Number, required: true}
})

module.exports = mongoose.model("promocaoModel", promocaoSchema)