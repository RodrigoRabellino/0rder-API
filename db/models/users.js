const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        email: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        phone: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        username: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
        },
        role: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        password: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

module.exports = { User };