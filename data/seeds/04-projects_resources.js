exports.seed = function(knex) {
  return knex('projects_resources')
    .truncate()
    .then(function() {
      return knex('projects_resources').insert([
        { projects_id: 1, resources_id: 1 },
        { projects_id: 1, resources_id: 2 }
      ]);
    });
};
