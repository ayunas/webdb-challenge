const express = require('express')
const dbHelper = require('./helperFunctions');
const taskRouter = express.Router();


taskRouter.get('/', (req,res) => {
    //res.status(200).json({message : 'welcome to the taskRouter'})
    dbHelper.getTasks()
        .then( tasks => {
            res.status(200).json(tasks);
        })
        .catch( err => {
            res.status(500).json(err.message);
        });
});

taskRouter.get('/:id', (req,res) => {

    dbHelper.getATask(req.params.id)
        .then( task => {
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({message : `task with id # ${req.params.id} was not found in the database`});
            }
        })
        .catch( err => {
            res.status(500).json(err.message);
        })
})

taskRouter.post('/', (req,res) => {

    dbHelper.postTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = taskRouter;

