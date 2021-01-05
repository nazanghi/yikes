const Router = require("express").Router()
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')
const AccountRouter = reuqire("./AccountRouter")

Router.use("/user", UserRouter)
Router.use("/review", ReviewRouter)
Router.use("/account", AccountRouter)

module.exports = Router