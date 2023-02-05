const { default: mongoose } = require("mongoose")

const schema = mongoose.Schema

const productSchema = new schema({
    type : String,
    name : String,
    date : {
        type : Date,
        default : Date.now
    },
    price : Number,
  })

module.exports = mongoose.model('product', productSchema)