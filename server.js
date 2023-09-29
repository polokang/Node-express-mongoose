require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const controllerRouter = require('./routes/controllers')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

app.use("/",controllerRouter);

app.listen(3000, () => console.log("Server Started...."))