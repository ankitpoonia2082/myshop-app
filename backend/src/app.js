const dbConnection = require("./Database/db")
const express = require('express')
const app = express()
const routeModule = require("./router/index");
const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));

const port = 3000;
app.use(express.json())
app.use('/', routeModule);


//? Listining request
app.listen(port,()=>{
    console.log('Server Started on port 3000')
})