const dbConnection = require("./Database/db")
const express = require('express')
const app = express()
const routeModule = require("../src/router");

const cors = require('cors')
app.use(cors())

const port = 3000;
app.use(express.json())
app.use('/', routeModule);


//? Listining request
app.listen(port,()=>{
    console.log('Server Started on port 3000')
})