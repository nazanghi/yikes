const Router = require("express").Router()
const controller = require("../controllers/ReviewController")

Router.post("/create", controller.CreateReview)
Router.get("/all", controller.GetAllReviews)
Router.get("/:review_id", controller.GetOneReview)
Router.get("/user/:user_id", controller.GetReviewsByUser)
Router.put("/:review_id", controller.EditReview)
Router.delete("/:review_id", controller.DeleteReview)

module.exports = Router

