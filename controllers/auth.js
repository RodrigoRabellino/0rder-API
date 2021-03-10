const { User } = require("../db/models/users");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");
const { verify } = require("password-hash");

const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        try {
            const user = await User.findOne({ email: email }).lean();
            const verified = await verify(password, user.password);
            if (!verified) {
                res.status(500).send({ messageError: "tremendo error" });
                return;
            }
            user.password = undefined;
            const token = jwt.sign(user, SECRET_KEY);
            res.json({ token });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ messageError: "tremendo error" });
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).send({ messageError: "tremendo error" });
    }
};

module.exports = {
    login,
};
