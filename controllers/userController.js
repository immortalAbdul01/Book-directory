const User = require('./../models/User')
const bcrypt = require('bcrypt')
exports.signIn = async (req, res) => {


    try {

        const user = await User.create(req.body)

        res.status(201).json({
            mssg: 'sucess',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(500).json({
            mssg: err.message
        })
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        res.status(404).json({
            mssg: 'failed must be email or password is wrong'


        })
    }
    res.status(201).json({
        mssg: 'sucess',
        user
    })
}