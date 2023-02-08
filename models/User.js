const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true

    },
    phoneNo: {
        type: Number,

    },
    password: {
        type: String,
        required: true,

    }
}
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()

})

const User = mongoose.model('User', userSchema)
module.exports = User