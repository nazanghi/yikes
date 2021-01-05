const Router = require('express').Router()
const controlller = require('../controllers/TagController')

Router.post('/tag', controller.TagReviewToCategory)

Router.delete('/:tagId', controller.RemoveTagFromReview)

//get all tags on a review
//get all reviews in a tag
//get one particular tag
Router.CRUD('/', controller.)
Router.CRUD('/', controller.)
Router.CRUD('/', controller.)


module.exports = Router