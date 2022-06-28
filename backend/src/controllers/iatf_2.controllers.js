// Fuções de CRUD 2 IATF + RT

const Iatf_2RTModel = require("../models/iatf_2.model");

//
//
// Save Dados
//
//
exports.saveIatf_2RT = async (req, res) => {
  try {
    const new_2Iatf = new Iatf_2RTModel(req.body);

    try {
      const iatf = await new_2Iatf.save();
      return res.status(201).json({
        messagem: "Dados da 2 IATF + RT Salvos com sucesso!",
        iatf,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao salvar os dados da 2 IATF + RT",
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
exports.getIatf_2RT = async (req, res) => {
  try {
    Iatf_2RTModel.find({}, (err, docs) => {
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
      mensagem: "Erro ao buscar os dados da 2 IATF + RT",
    });
  }
};

//
// Update
//
//
exports.updateIatf_2RT = async (req, res) => {
  try {
    const dados = req.body;
    const filter = { _id: dados._id };

    try {
      const result = await Iatf_2RTModel.findByIdAndUpdate(filter, dados, {
        new: true,
        useFindAndModify: false,
      });
      return res.status(200).json({
        messagem: "Dados da 2 IATF + RT Atualizados com sucesso!",
        result,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao atualizar os dados da 2 IATF + RT",
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error, mensagem: "Erro ao atualizar os dados" });
  }
};
