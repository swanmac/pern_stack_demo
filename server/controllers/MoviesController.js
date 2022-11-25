const { Movies } = require('../models')

const FindAllMovies = async (req, res) => {
    try {
      const result = await Movies.findAll()
      res.send(result)
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    // CreateMovies,
    FindAllMovies,
    // UpdateMovies,
    // DeleteMovies
  }