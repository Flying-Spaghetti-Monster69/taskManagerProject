const express = require('express');
const app = express();

app.get('/hello', (req,res)=>{
    res.send('task manager app test')
})


const port = 6969;

app.listen(port, console.log('listening!!'))