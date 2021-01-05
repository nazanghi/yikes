const Router = require("express").Router()
const controller = require("../controllers/AccountController")

Router.post("/create", controller.CreateAccount)
Router.get("/all", controller.GetAllAccounts)
Router.get("/user/:userId", controller.GetAccountByUserId)
Router.get("/:accountId", controller.GetOneAccount)
Router.post("/:accountId", controller.EditAccount)

module.exports = Router