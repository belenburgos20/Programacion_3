const personas = require('../models/personas.model.js');

const getPersonas = (req, res) => {
  res.json(personas);
};

module.exports = {
  getPersonas
};