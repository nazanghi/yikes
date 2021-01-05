const Router = require("express").Router()
const controller = require('../controllers/CategoryController')

Router.post('/create', controller.CreateCategory)
Router.get('/categories', controller.GetAllCategories)
Router.get('/:categoryId', controller.GetOneCategory)
// Router.get('/:categoryName', controller.GetCategoryIdByName)

module.exports = Router