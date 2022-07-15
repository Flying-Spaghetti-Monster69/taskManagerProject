const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
// middleware

app.use(express.static('./public'))
app.use(express.json());


// routes

app.use('/api/v1/tasks', routes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 6969;

const start = async()=>{
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('listening!!'))
    } catch (error) {
        console.log('somenthing went wrong :C');
    }
}

start()