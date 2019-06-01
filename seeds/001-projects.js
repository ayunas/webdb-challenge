
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project: 'React Wars'},
        {project: 'Redux Smurfs'},
        {project: 'Pintereach'},
        {project: 'SafeSpace'},
        {project: 'Portfolio'},
        {project: 'Pokemon-API'}
      ]);
    });
};
