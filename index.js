const express = require('express')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
const cors = require('cors');
const { connection } = require('./src/utils/connect');
const bookRouter = require('./src/route/bookRoute');
const ObjectId = require('mongodb').ObjectId

const port = 5000

const app = express()
app.use(bodyParser.json())
app.use(cors())

// /mongoose connections

function main(){
    connection();
 }
 main()

//  routing

app.get("/",(req,res)=>res.send('hello world'))

app.use('/book',bookRouter)



app.listen(process.env.PORT || port,()=>console.log('server running') )