
const express = require("express")
const routes = express.Router()

const {logIn, signUp} = require("../controller/userController")

routes.post('/logIn', logIn)

routes.post('/signUp',signUp)


module.exports = routes