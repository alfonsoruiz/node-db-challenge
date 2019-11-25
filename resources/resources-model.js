const db = require('../data/db-config.js');

module.exports = {
  getResources,
  addResource,
  removeResources
};

function getResources() {
  return db('resources');
}

function addResource(newResource) {
  return db('resources').insert(newResource);
}

function removeResources(id) {
  return db('resources')
    .where({ id })
    .del();
}
