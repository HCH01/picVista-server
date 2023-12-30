const route = require('express').Router();
const {signIn, loginPage} = require('../controllers/login')

route.route('/login').post(signIn).get(loginPage);

module.exports = route