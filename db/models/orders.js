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
                qtyOrder: {
                    type: mongoose.Schema.Types.Number,
                    required: true,
                },
            },
        ],
        client: {
            name: mongoose.Schema.Types.String,
            phone: mongoose.Schema.Types.Number,
            address: mongoose.Schema.Types.String,
            obs: mongoose.Schema.Types.String,
        },
        total: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        deliveredAt: {
            type: mongoose.Schema.Types.Date,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", ordersSchema);

module.exports = { Order };
