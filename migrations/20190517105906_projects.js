
exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {

        tbl.increments();

        tbl.string("project")
            .notNullable()
            .unique();
        
        tbl.text("description");

        tbl.boolean("completed");

  });
    
};

exports.down = function(knex, Promise) {

        return knex.schema.dropTableIfExists("projects");
};
