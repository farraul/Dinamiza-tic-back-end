const express = require('express');
const router = express.Router();

//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/:id', MovieController.delete);

module.exports = router;