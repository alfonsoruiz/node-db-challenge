exports.seed = function(knex) {
  return knex('tasks')
    .truncate()
    .then(function() {
      return knex('tasks').insert([
        {
          description: 'Create Server',
          notes: 'Use express server',
          completed: 1,
          projects_id: 1
        },
        {
          description: 'Create React App',
          notes: 'Install dependencies',
          completed: 0,
          projects_id: 2
        },
        {
          description: 'Setup Routes',
          notes: 'Use express router',
          completed: 0,
          projects_id: 1
        },
        {
          description: 'Nav Component',
          notes: 'Create and style the nav component',
          completed: 0,
          projects_id: 2
        }
      ]);
    });
};
