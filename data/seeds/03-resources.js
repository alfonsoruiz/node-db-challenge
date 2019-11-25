exports.seed = function(knex) {
  return knex('resources')
    .truncate()
    .then(function() {
      return knex('resources').insert([
        { name: 'Lambda School', description: 'Education' },
        { name: 'Github', description: 'Online Repsoitory' }
      ]);
    });
};
