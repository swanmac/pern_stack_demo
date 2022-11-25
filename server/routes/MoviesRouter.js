const Router = require('express').Router()
const controller = require('../controllers/MoviesController')

Router.get('/', controller.FindAllMovies)


module.exports = Router