const mongoose  = require("mongoose");

const ordersSchema = new mongoose.Schema({
    products: [{
        id: {type: mongoose.Schema.Types.ObjectId, ref: "Product"}, 
        qtyOrder: Number,
    }],
    client: {
        name: String,
        phone: Number, 
        address: String, 
        obs: String,
    },
    total: Number, 
}, { timestamps: true })

const Order = mongoose.model("Order", ordersSchema)

module.exports = { Order }