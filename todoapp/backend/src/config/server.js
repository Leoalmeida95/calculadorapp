const port = 3004

const bodyparser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server