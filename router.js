const router = require('express').Router();

//Importamos Routes definidas en views
const UsersdynamizaRouter = require('./views/users_dynamiza');

//Rutas
router.use('/users', UsersdynamizaRouter);

module.exports = router;