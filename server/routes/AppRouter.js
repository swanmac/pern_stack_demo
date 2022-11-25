const Router = require('express').Router()


const ActorRouter = require('./ActorRouter')
const MoviesRouter = require('./MoviesRouter')


Router.use('/actor', ActorRouter)
Router.use('/movies', MoviesRouter)




module.exports = Router