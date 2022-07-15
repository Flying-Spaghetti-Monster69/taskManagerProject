const Task = require('../models/Task')

const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch(error){
        res.status(500).json({msg: error})
    }
}
const getTasks = (req,res)=>{
    res.send(req.params);
}
const changeTasks = (req,res)=>{
    res.send('sent request of updating tasks');
}
const deleteTasks = (req,res)=>{
    res.send('sent request of deleting tasks');
}
const createTasks = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch(error){
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllTasks,
    getTasks,
    changeTasks,
    deleteTasks,
    createTasks
}