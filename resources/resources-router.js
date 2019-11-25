const express = require('express');
const router = express.Router();
const Resources = require('./resources-model.js');

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error posting resrouce to db' });
    });
});

router.get('/', (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error getting resources from db' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Resources.removeResources(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find resource with specified id' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Error deleting resource from the db' });
    });
});

module.exports = router;
