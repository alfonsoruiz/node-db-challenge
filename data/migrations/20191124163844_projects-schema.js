exports.up = function(knex) {
  return (
    knex.schema
      // ========= Projects =========
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name').notNullable();
        tbl.text('description');
        tbl.integer('completed').defaultTo(0);
      })

      // ========= Tasks =========
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.integer('completed').defaultTo(0);
        tbl
          .integer('projects_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })

      // ========= Resources =========
      .createTable('resources', tbl => {
        tbl.increments();
        tbl
          .text('name')
          .notNullable()
          .unique();
        tbl.text('description');
      })

      // ========= Projects_Resources =========
      .createTable('projects_resources', tbl => {
        tbl.increments();
        tbl
          .integer('projects_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl
          .integer('resources_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
