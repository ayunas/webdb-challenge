
exports.up = function(knex, Promise) {
  return knex.schema.createTable("tasks", tbl => {

        tbl.increments();

        tbl.string("task")
            .notNullable()
            .unique();

        tbl.text("description");

        tbl.text("notes");

        tbl.boolean("completed")

        tbl.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
            //.unsigned()
  })
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists("tasks");
};
