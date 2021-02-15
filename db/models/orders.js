const mongoose  = require("mongoose");

const ordersSchema = new mongoose.Schema({
    products: [{
        id: Number,
        qtyOrder: Number,
    }],
    total: Number,
    user: {
        userName: String,
        phone: Number, 
        address: String, 
        obs: String,
    }
})

const Order = mongoose.model("Order", ordersSchema)

module.exports = { Order }