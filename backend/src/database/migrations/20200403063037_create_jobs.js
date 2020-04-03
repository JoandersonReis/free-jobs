exports.up = function(knex) {
  return knex.schema.createTable("jobs", function(table) {
    table.increments()
    table.string("title").notNullable()
    table.string("description").notNullable()
    table.decimal("salary").notNullable()
    table.string("workload").notNullable()

    table.string("org_id").notNullable()

    table.foreign("org_id").references("id").inTable("orgs")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("jobs")
};
