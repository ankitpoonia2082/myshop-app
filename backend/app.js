const dbConnection = require("./db")
const express = require('express')
const app = express()


const port = 3000;

app.post('/insertData/phones',(req,res)=>{
    try{

    }
    catch(err){
        res.status(400).send(err)
    }
})

//? Listining request
app.listen(port,()=>{
    console.log('Server Started on port 3000')
})