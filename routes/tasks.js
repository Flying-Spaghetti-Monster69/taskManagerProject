const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    getTasks,
    createTasks,
    deleteTasks,
    changeTasks
} = require('../controllers/tasks');

router.route('/')
   .get(getAllTasks)
   .post(createTasks);

router.route('/:id')
   .get(getTasks)
   .patch(changeTasks)
   .delete(deleteTasks);

module.exports = router;