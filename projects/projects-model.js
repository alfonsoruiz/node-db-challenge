const db = require('../data/db-config.js');

module.exports = {
  addProject,
  getProjects,
  getProjectById,
  removeProject,
  getTasks,
  addTask,
  removeTask
};

function addProject(newProject) {
  return db('projects').insert(newProject);
}

function getProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function removeProject(id) {
  return db('projects')
    .where({ id })
    .del();
}

function addTask(newTask) {
  return db('tasks').insert(newTask);
}

function getTasks(id) {
  return db('projects')
    .select(
      'projects.name',
      'projects.description As project_description',
      'tasks.description AS task_description',
      'tasks.completed',
      'tasks.notes',
      'tasks.id AS task_id'
    )
    .join('tasks', 'projects.id', '=', 'tasks.projects_id')
    .where('projects.id', '=', id);
}

function removeTask(id) {
  return db('tasks')
    .where({ id })
    .del();
}
