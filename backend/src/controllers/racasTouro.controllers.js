// Fuções de CRUD IATF + RT

const RacasTouroModel = require("../models/racasTouro.model");

//
//
// Get Dados
//
//
exports.getRacasTouro = async (req, res) => {
  try {
    RacasTouroModel.find({}, (err, docs) => {
      if (err) {
        return res.status(401).json({ Erro: err });
      }

      if (docs.length === 0) {
        return res.status(404).json({ mensagem: "Nada foi encontrado" });
      }

      return res.status(200).json(docs);
    });
    return false;
  } catch (error) {
    return res.status(404).json({
      error,
      mensagem: "Erro ao buscar os dados de Raças de Touros",
    });
  }
};

//
// Update
//
//
exports.updateRacasTouro = async (req, res) => {
  try {
    const dados = req.body;
    // eslint-disable-next-line no-underscore-dangle
    const filter = { _id: dados._id };
    const query = dados.descricao;

    try {
      RacasTouroModel.findOne({ descricao: query }, async (err, value) => {
        if (err) {
          return res.status(201).json(err);
        }
        if (value) {
          return res.status(400).json({
            value,
            mensagem: "Já existe uma Raça de Touro com essa Descrição!",
          });
        }
        const result = await RacasTouroModel.findByIdAndUpdate(filter, dados, {
          new: true,
          useFindAndModify: false,
        });
        return res.status(200).json({
          mensagem: "Dados da Raças de Touros Atualizados com sucesso!",
          result,
        });
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao atualizar os dados da Raças de Touros",
      });
    }

    return false;
  } catch (error) {
    return res
      .status(404)
      .json({ error, mensagem: "Erro ao atualizar os dados" });
  }
};

//
//
// Save Dados
//
//
exports.saveRacasTouro = async (req, res) => {
  try {
    const racas = new RacasTouroModel(req.body);
    const query = req.body.descricao;

    RacasTouroModel.findOne({ descricao: query }, async (err, value) => {
      if (err) {
        return res.status(201).json(err);
      }
      if (value) {
        return res.status(400).json({
          value,
          mensagem: "Já existe uma Raça de Touro com essa Descrição!",
        });
      }
      const touros = await racas.save();
      return res.status(201).json({
        mensagem: "Racas de Touros Salvos com sucesso!",
        touros,
      });
    });
    return true;
  } catch (error) {
    return res.status(404).json({ error, mensagem: "Erro ao salvar os dados" });
  }
};

//
//
// Delete Dados
//
//
exports.deleteRacasTouro = async (req, res) => {
  try {
    const { id } = req.query;

    const result = await RacasTouroModel.findByIdAndDelete({ _id: id });

    return res.status(200).json({
      mensagem: "Raça de Touro Removido com sucesso!",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Erro ao remover Raça de Touro" });
  }
};
