const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                qtyOrder: { type: Number, required: true },
            },
        ],
        client: {
            name: String,
            phone: Number,
            address: String,
            obs: String,
        },
        total: Number,
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", ordersSchema);

module.exports = { Order };
