const express = require('express')
const dbHelper = require('./helperFunctions');

const projectRouter = express.Router();

projectRouter.get('/', (req,res) => {
    //res.status(200).json({message : 'welcome to the projectRouter'})
    dbHelper.getProjects()
    .then( projects => {
        res.status(200).json(projects);
    })
    .catch( err => {
        res.status(500).json(err.message);
    });
});

projectRouter.get('/:id', (req,res) => {
    dbHelper.getAProject(req.params.id)
        .then( proj => {
            console.log('project', proj);
            if (proj) {
                res.status(200).json(proj);
            } else {
                res.status(404).json({message : `the project with id # ${req.params.id} was not found in the database`});
            }
        })
        .catch( err => {
            res.status(500).json(err.message);
        });
});

projectRouter.post('/', (req,res) => {
    dbHelper.postProject(req.body)
        .then( proj => {
            res.status(201).json(proj);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});


module.exports = projectRouter;

