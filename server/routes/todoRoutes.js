const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo')

//get all tasks
router.get('/', async (req, res) => { 
    const allTasks = await Todo.find();
    res.json(allTasks)
});

//get one task
router.get('/:id', async (req, res) => { 
    const onetask = await Todo.findById(req.params.id);
    res.json(onetask)
});

//create a task
router.post('/', async (req,res) => {
    const newTask = await Todo.create(req.body);
    res.status(201).json({newTask})
})

//delete a task
router.delete('/:id', async(req,res)=>{
    const result = await Todo.findByIdAndDelete(req.params.id)
    if(result)
        res.json(`task successfully deleted ${req.params.id}`)
    else
        res.json({message:"not found"})
})

module.exports = router;