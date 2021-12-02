//Importo modelo de datos
const db = require("../models");
const users_dynamiza = db.users_dynamiza;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 
const UserController = {}; //Create the object controller

//CRUD end-points Functions
//GET all movies from database
UserController.getAll = (req, res) => {
    
  users_dynamiza.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      });
  };

//CREATE a new movie in database
UserController.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Movies
    const new_User_dyna = {
      name: req.body.name
    };
  
    // Save Movies in the database
    users_dynamiza.create(new_User_dyna)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };

//UPDATE a movie from database
UserController.update = (req, res) => {
    const id = req.params.id;
  
    users_dynamiza.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };

//DELETE a movie by Id from database
UserController.delete = (req, res) => {
    const id = req.params.id;
  
    users_dynamiza.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };

module.exports = UserController;