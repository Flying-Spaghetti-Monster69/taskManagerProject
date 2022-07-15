const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware

app.use(express.json());

// routes

app.use('/api/v1/tasks', routes);

app.get('/hello', (req,res)=>{
    res.send('task manager app test')
})

const port = 6969;

const start = async()=>{
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('listening!!'))
    } catch (error) {
        console.log('somenthing went wrong :C');
    }
}

start()