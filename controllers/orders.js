const { Types } = require("mongoose");
const { Order } = require("../db/models/orders");
const { Product } = require("../db/models/products");

const list = async (req, res) => {
    try {
        const ordersList = await Order.find().populate("products.product");
        res.json(ordersList);
    } catch (error) {
        console.log("error", error);
        res.status(500).send("tremendo error");
    }
};

const create = async (req, res) => {
    try {
        const { client, productsList: products } = req.body;
        const idList = products.map((item) => {
            return Types.ObjectId(item.product);
        });
        const resultList = await Product.find({
            _id: {
                $in: idList,
            },
        });
        const orderBody = {
            client,
            products,
            total: resultList.reduce(
                (prev, product, index) =>
                    prev + product.price * products[index].qtyOrder,
                0
            ),
        };
        const order = await Order.create(orderBody);
        res.json(order);
    } catch (err) {
        console.log("error", err);
        res.status(500).send("no creado");
    }
};

const edit = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).send("no editado");
    }
};

const del = async (req, res) => {
    try {
        const order = await Order.findById(req.body);
    } catch (error) {
        res.status(500).send("no editado");
    }
};

module.exports = {
    list,
    create,
    edit,
    del,
};
