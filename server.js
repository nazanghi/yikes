const app = require('express')()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const AppRouter = require(/**build Route */)

const PORT = process.env.PORT ||3030

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (request, response) => response.json({ `It's a-me, a-server!`}))
app.use('/api', AppRouter) //need to build appRouter

app.get('*', (request, response) => response.sendFile(path.join(__dirname, "client", 'build', 'index.html')))


app.listen(PORT, ()=> console.log(`you'se gots yeself a server on port: ${PORT}`))

