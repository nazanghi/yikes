const Router = require("express").Router()
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use("/user", UserRouter)
Router.use("/review", ReviewRouter)

module.exports = Router