const { User } = require("../db/models/users");

const login = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log("error", error);
        res.status(500).send("tremendo error");
    }
};

const register = async (req, res) => {
    try {
        const user = await User.create(
            new User({
                username: req.body.username,
                password: "hashed password",
            })
        );
        res.status(201).json(user);
    } catch (err) {
        console.log("error", error);
        res.status(500).send("no creado");
    }
};

module.exports = {
    login,
    register,
};
