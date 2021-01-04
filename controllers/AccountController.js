const {Account} = require('../models')

const CreateAccount = async (request, response) => {
    try {
        let accountDetails = {
            ...request.body
        }
        let newAccount = await Account.create(accountDetails)
        response.send(newAccount)
        console.log('CreateAccount hits')
    } catch (error) {
        console.log('CreateAccount fails')
        throw error
    }
}
 
const GetOneAccount = async (request, response) => {
    try {
        const accountDetails = await Account.findByPk(request.params.id)
        response.send(accountDetails)
        console.log('GetOneAccount hits')
    } catch (error) {
        console.log('GetOneAccount fails')
        throw error
    }
}
 
const GetAllAccounts = async (request, response) => {
    try {
        const allAccounts = await Account.findAll()
        response.send(allAccounts)
        console.log('GetAllAccounts hits')
    } catch (error) {
        console.log('GetAllAccounts fails')
        throw error
    }
}
 
const GetAccountByUserId = async (request, response) => {
    try {
        const accountDetails = await Account.findAll({
            where: {user_id: request.body.user_id}
        })
        response.send(accountDetails[0])
        console.log('GetOneAccountByUserId hits')
    } catch (error) {
        console.log('GetOneAccountByUserId fails')
        throw error
    }
}
 

module.exports = {
    CreateAccount,
    GetOneAccount,
    GetAllAccounts,
    GetAccountByUserId
}