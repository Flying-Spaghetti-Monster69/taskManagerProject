const getAllTasks = (req,res)=>{
    res.send('sent request of getting tasks');
}
const getTasks = (req,res)=>{
    res.send('sent request of getting task');
}
const changeTasks = (req,res)=>{
    res.send('sent request of updating tasks');
}
const deleteTasks = (req,res)=>{
    res.send('sent request of deleting tasks');
}
const createTasks = (req,res)=>{
    res.send('sent request of creating tasks');
}

module.exports = {
    getAllTasks,
    getTasks,
    changeTasks,
    deleteTasks,
    createTasks
}