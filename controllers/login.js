const jwt = require('jsonwebtoken')
const path = require('path')
const asyncWrapper = require('../utils/async-error-handler')

const signIn = asyncWrapper(async (req, res, next) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.send("enter credentials")
    }
    const token = jwt.sign({ id: Date.now(), name, password }, process.env.ACCESS_TOKEN_KEY, { expiresIn: process.env.TOKEN_EXPIRE_DATE })
    res.send(token);
})

const loginPage = (req, res, next) => {
    res.sendFile(path.resolve('./public/login-page.html'));
}

module.exports = {
    signIn,
    loginPage
}