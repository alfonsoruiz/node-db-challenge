exports.seed = function(knex) {
  return knex('projects')
    .truncate()
    .then(function() {
      return knex('projects').insert([
        {
          name: 'Backend Project',
          description: 'Back end for Project X',
          completed: 1
        },
        {
          name: 'Frontend Project',
          description: 'Front end for Project X',
          completed: 0
        }
      ]);
    });
};
