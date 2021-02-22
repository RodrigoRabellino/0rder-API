const { User } = require("../db/models/users");

const list = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log("error", error);
        res.status(500).send("tremendo error");
    }
};

const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
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
        const user = await User.findOneAndDelete(req.body);
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
