const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        profession: {
            type: String,
        }
    },
    { timestamps: true }
)

const User = mongoose.model("user", UserSchema)

module.exports = User