const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtoSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    nome: {type: String, required: true},
    precoAtual: {type: Number, required: true},
    precoPromocao: {type: Number, required: true},
    tipo: {type: String, required: true},
    descricao: {type: String, required: true},
    validade: {type: Date, required: true}
})

module.exports = mongoose.model("produtoModel", produtoSchema)