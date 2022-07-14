const express = require('express');
const app = express();
const routes = require('./routes/tasks');

// middleware

app.use(express.json());

// routes

app.use('/api/v1/tasks', routes);

app.get('/hello', (req,res)=>{
    res.send('task manager app test')
})


const port = 6969;

app.listen(port, console.log('listening!!'))