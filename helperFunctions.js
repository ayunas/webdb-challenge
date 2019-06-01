const db = require("./data/dbConfig");

function getProjects() {
  return db("projects");
}

function getAProject(projectID) {
  return db("projects")
    .where({ id: projectID })
    .then(project => {
      return db("tasks")
        .where({ project_id: projectID })
        .then(task => {
          return { ...project, task };
        });
    });
}

function postProject(proj) {
  return db("projects")
    .insert(proj, "id")
    .then(([id]) => {
      //need help understanding the destructuring and rewriting this explicitly
      return getAProject(id);
    });
}

function putProject(proj, id) {
  return db("projects")
    .where({ id: id })
    .update(proj)
    .then(count => {
      return getAProject(id);
    });
}

function deleteProject(id) {
  return db("projects")
    .where({ id: id })
    .del();
}
/************************************************ */
const getTasks = () => {
  return db("tasks");
};

function getATask(taskID) {
  return db("tasks")
    .where({ id: taskID })
    .first();
}

function postTask(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => {
      return getATask(id);
    });
}

function putTask(task, id) {
  return db("tasks")
    .where({ id: id })
    .update(task)
    .then(count => {
      if (count > 0) {
        return getATask(id);
      } else {
        return null;
      }
    });
}

function deleteTask(id) {
  return db("tasks")
    .where({ id: id })
    .del();
}

module.exports = {
  getProjects,
  getAProject,
  getTasks,
  getATask,
  postProject,
  postTask,
  putProject,
  deleteProject,
  putTask,
  deleteTask
};
