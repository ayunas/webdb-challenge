const express = require('express')

const taskRouter = express.Router();


taskRouter.get('/', (req,res) => {
    res.status(200).json({message : 'welcome to the taskRouter'})
})

module.exports = taskRouter;

