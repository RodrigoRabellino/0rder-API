const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        address: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        email: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        phone: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

module.exports = { Company };
