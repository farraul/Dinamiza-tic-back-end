const express = require('express');
const router = express.Router();

//Importo los modelo de datos
const users_dynamiza_Controller = require('../controllers/user-dynamiza-Controller');

// End-points CRUD movies
router.get('/', users_dynamiza_Controller.getAll);
router.post('/', users_dynamiza_Controller.create);
router.put('/:id', users_dynamiza_Controller.update);
router.delete('/:id', users_dynamiza_Controller.delete);

module.exports = router;