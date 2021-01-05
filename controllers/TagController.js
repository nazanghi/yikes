const {Tag, Review, Category } = require('../models')

const CreateTag = async (request, response) => {
    try {
        const reviewId = request.body.reviewId
        const categoryId = request.body.categoryId
        const review = await Review.findByPk(reviewId)
        const category = await Category.findByPk(categoryId)
        let newTag = await Tag.create({
            review_id: parseInt(review.dataValues.id),
            reviewId: parseInt(review.dataValues.id),
            category_id: parseInt(category.dataValues.id),
            categoryId: parseInt(category.dataValues.id)
        })
        console.log('TagController: CreateTag hits, tag:', newTag)
        response.send(newTag)
    }catch(error) {
        console.log('TagController: CreateTag fails')
        throw error
    }
}
 
const DeleteTagInstance = async (request, response) => {
    try {
        let tagId = parseInt(request.params.tagId)
        await Tag.destroy({
            where:{
                id: tagId
            }
        })
        console.log('TagController: DeleteTagInstance hits')
        response.send(message: `Deleted Tag Id'd: ${tagId}`)
    }catch(error) {
        console.log('TagController: DeleteTagInstance fails')
        throw error
    }
}
 
const FetchByTag = async (request, response) => {
    try {
        let categoryId = parseInt(request.params.categoryId)
        const allReviewsTagged = await Tag.findAll({
            where: {category_id: categoryId}
        })
        console.log('TagController: FetchByTag hits')
        response.send(allReviewsTagged)
    }catch(error) {
        console.log('TagController: FetchByTag fails')
        throw error
    }
}
 
const GetReviewTags = async (request, response) => {
    try {
            let reviewId = parseInt(request.params.reviewId)
            const allReviewTags = await Tag.findAll({ 
                where: {review_id: reviewId}
            })
        console.log('TagController: GetReviewTags hits')
        response.send(allReviewTags)
    }catch(error) {
        console.log('TagController: GetReviewTags fails')
        throw error
    }
}
const GetTag = async (request, response) => {
    try {
        let reviewId = parseInt(request.params.reviewId)
        let categoryId = parseInt(request.params.categoryId)
        let tagId = await Tag.findOne({
            attributes: ['id'],
            where:{
                review_id: reviewId,
                category_id: categoryId
            }
        })
        console.log('TagController: GetTag hits')
        response.send(tagId)
    }catch(error) {
        console.log('TagController: GetTag fails')
        throw error
    }
}

module.exports = {
    CreateTag,
    FetchByTag,
    GetReviewTags,
    DeleteTagInstance,
    GetTag
}

// const Tag = async (request, response) => {
//     try {

//         console.log('TagController: .Tag hits')
//         response.send()
//     }catch(error) {
//         console.log('TagController: .Tag fails')
//         throw error
//     }
// }
 