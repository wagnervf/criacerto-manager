//Fuções de  CRUD do tipos_simulacoes

const EcowModel = require('../models/ecow.model');


exports.getDados = async (req, res) => {
  console.log(res)
  EcowModel.find(function (err, tipos) {
    console.log(tipos)
    if (err) return handleError(err);

    res.status(200).json(tipos);

  
  });
};





