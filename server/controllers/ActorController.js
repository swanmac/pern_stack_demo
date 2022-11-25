const { Actor } = require('../models')

const FindAllActor = async (req, res) => {
  try {
    const result = await Actor.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actor_id)
    let actorBody = {actorId, ...req.body}
    let actor = await Actor.create(actorBody)
    res.send(actor)
  } catch (error) {
    throw error
  }
}

const UpdateActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actor_id)
    let updatedActor = await Actor.update(req.body, {
        where: {id: actorId},
        returning: true
    })
    res.send(updatedActor)
  } catch (error) {
    throw error
  }
}

const DeleteActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actor_id)
    await Actor.destroy({where:{id:actorId}})
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateActor,
  FindAllActor,
  UpdateActor,
  DeleteActor
}