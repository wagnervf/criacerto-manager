/* eslint-disable no-underscore-dangle */
// Fuções de  CRUD Monta Natural

const MontaNaturalModel = require("../models/montaNatural.model");

//
//
// Save Dados
//
//
exports.saveMontaNatural = async (req, res) => {
  try {
    const newMontaNatural = new MontaNaturalModel(req.body);

    try {
      const MontaNatural = await newMontaNatural.save();
      return res.status(201).json({
        messagem: "Dados da Monta Natural Salvos com sucesso!",
        MontaNatural,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao salvar os dados da Monta Natural",
      });
    }
  } catch (error) {
    return res.status(404).json({ error, mensagem: "Erro ao salvar os dados" });
  }
};

//
//
// Get Dados
//
//
exports.getMontaNatural = async (req, res) => {
  try {
    MontaNaturalModel.find({}, (err, docs) => {
      if (err) {
        return res.status(401).json({ Erro: err });
      }

      if (docs.length === 0) {
        return res.status(404).json({ message: "Nada foi encontrado" });
      }

      return res.status(200).json(docs);
    });
    return false;
  } catch (error) {
    return res.status(404).json({
      error,
      mensagem: "Erro ao buscar os dados da Monta Natural",
    });
  }
};

//
// Update
//
//
exports.updateMontaNatural = async (req, res) => {
  try {
    const dados = req.body;
    const filter = { _id: dados._id };

    try {
      const result = await MontaNaturalModel.findByIdAndUpdate(filter, dados, {
        new: true,
        useFindAndModify: false,
      });
      return res.status(200).json({
        messagem: "Dados da Monta Natural Atualizados com sucesso!",
        result,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao atualizar os dados da Monta Natural",
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error, mensagem: "Erro ao atualizar os dados" });
  }
};
