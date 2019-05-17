const express = require('express')

const projectRouter = express.Router();

projectRouter.get('/', (req,res) => {
    res.status(200).json({message : 'welcome to the projectRouter'})
})

module.exports = projectRouter;

