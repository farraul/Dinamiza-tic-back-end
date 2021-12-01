const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');

//Rutas
router.use('/movies', MovieRouter);

module.exports = router;