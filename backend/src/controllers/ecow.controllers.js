// Fuções de  CRUD do tipos_simulacoes

const EcowModel = require("../models/ecow.model");

exports.getDados = async (req, res) => {
  console.log(res);
  EcowModel.find((err, tipos) => {
    console.log(tipos);
    if (err) {
      // eslint-disable-next-line no-undef
      return handleError(err);
    }

    return res.status(200).json(tipos);
  });
};
