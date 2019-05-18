const db = require('./data/dbConfig');

function getProjects() {
    return db("projects");
}

// function getAProject(projectID) {  //functioning getAProject
//     return db("projects")
//         .where({id : projectID})
//         .first()
// }

function getAProject(projectID) {
    return db("projects")
            .where({'id' : projectID})
    .then( project => {
       //console.log(project);
       return db("tasks").where({'project_id' : projectID}).then(task => { return {...project, task}})
        })
}

function postProject(proj) {
    return db("projects")
            .insert(proj, "id")
            .then( ([id]) => {    //need help understanding the destructuring and rewriting this explicitly
                return getAProject(id)
            });
};

/************************************************ */

const getTasks = () => {
    return db("tasks");
}

function getATask(taskID) {
    return db("tasks")
        .where({id : taskID})
        .first();
};

function postTask(task) {
    return db("tasks")
            .insert(task, "id")
            .then( ([id]) => {
                return getATask(id);
            });
};


module.exports = {
    getProjects,
    getAProject,
    getTasks,
    getATask,
    postProject,
    postTask
}