// Fuções de CRUD IATF + RT

const IatfRTModel = require("../models/iatf.model");

//
//
// Save Dados
//
//
exports.saveIatfRT = async (req, res) => {
  try {
    const newiatf = new IatfRTModel(req.body);

    try {
      const iatf = await newiatf.save();
      return res.status(201).json({
        messagem: "Dados da IATF + RT Salvos com sucesso!",
        iatf,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao salvar os dados da IATF + RT",
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
exports.getIatfRT = async (req, res) => {
  try {
    IatfRTModel.find({}, (err, docs) => {
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
      mensagem: "Erro ao buscar os dados da IATF + RT",
    });
  }
};

//
// Update
//
//
exports.updateIatfRT = async (req, res) => {
  try {
    const dados = req.body;
    const filter = { _id: dados._id };

    try {
      const result = await IatfRTModel.findByIdAndUpdate(filter, dados, {
        new: true,
        useFindAndModify: false,
      });
      return res.status(200).json({
        messagem: "Dados da IATF + RT Atualizados com sucesso!",
        result,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao atualizar os dados da IATF + RT",
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error, mensagem: "Erro ao atualizar os dados" });
  }
};
