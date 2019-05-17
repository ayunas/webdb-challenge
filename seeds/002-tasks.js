
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task: 'setup project on local machine', description: "fork and clone the github repo. Then create a branch with your first-last name. then follow the directions on the README.md!", project_id : 1},
        {task: "Create-React-App", description: "create a react app from scratch by executing the command, create-react-app", project_id: 2}
      ]);
    });
};


