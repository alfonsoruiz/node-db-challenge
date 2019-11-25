const express = require('express');
const Projects = require('./projects-model.js');
const hf = require('../helpers/helperFunctions.js');
const router = express.Router();

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error posting project to db' });
    });
});

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      const booleanConversion = hf.intToBoolean(projects);
      res.status(200).json(booleanConversion);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error retrieving projects from db' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Projects.getProjectById(id)
    .then(project => {
      if (project) {
        const booleanConversion = hf.intToBoolean(project);
        res.status(200).json(booleanConversion);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with specified id' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Error getting project with specified id from db' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Projects.removeProject(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with specified id' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Error deleting project from db' });
    });
});

router.post('/tasks', (req, res) => {
  const taskData = req.body;

  Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error posting task to db' });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(tasks => {
      const booleanConversion = hf.intToBoolean(tasks);
      res.status(200).json(booleanConversion);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error getting project tasks from db' });
    });
});

router.delete('/:id/tasks/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  Projects.removeTask(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ message: 'Could not find specified task' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Error deleting task from db' });
    });
});

module.exports = router;
