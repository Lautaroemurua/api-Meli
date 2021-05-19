const fetch = require('node-fetch');
const config = require('../config/config').config;
const MeliService = require('../services/mercadolibre.service');
var controller = {}

controller.list = async (req, res) => {
  let query = req.query;
  if (query) {
    const results = await MeliService.search(query);
    res.json(results);
  } else {
    res.json({msg: 'La busqueda no puede ser vacia'});
  }
}

controller.find = async (req, res) => {
  let id = req.params.id;
 if (id) {
   const item = await MeliService.searchById(id);
   res.json(item);
 } else {
   res.json({msg: 'No hay id'});
 }
}

module.exports = controller