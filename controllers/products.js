const { Product } = require("../db/models/products");

const list = async (req, res) => {
    try {
        const productsList = await Product.find();
        res.json(productsList);
    } catch (error) {
        console.log("error", error);
        res.status(500).send("tremendo error");
    }
};

const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (err) {
        console.log("error", error);
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
        const product = await Product.findById(req.body);
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
