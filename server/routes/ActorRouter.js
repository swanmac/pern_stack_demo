const Router = require('express').Router()
const controller = require('../controllers/ActorController')

Router.get('/', controller.FindAllActor)
Router.post('/:actor_id', controller.CreateActor)
Router.put('/:actor_id', controller.UpdateActor)
Router.delete('/:actor_id', controller.DeleteActor)

module.exports = Router