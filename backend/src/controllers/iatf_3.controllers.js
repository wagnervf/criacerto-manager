// Fuções de CRUD 2 IATF + RT

const Iatf3Model = require("../models/iatf_3.model");

//
//
// Save Dados
//
//
exports.saveIatf3 = async (req, res) => {
  try {
    const newIatf3 = new Iatf3Model(req.body);

    try {
      const iatf = await newIatf3.save();
      return res.status(201).json({
        messagem: "Dados da 3 IATF + RT Salvos com sucesso!",
        iatf,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao salvar os dados da 3 IATF + RT",
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
exports.getIatf3 = async (req, res) => {
  try {
    Iatf3Model.find({}, (err, docs) => {
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
      mensagem: "Erro ao buscar os dados da 3 IATF + RT",
    });
  }
};

//
// Update
//
//
exports.updateIatf3 = async (req, res) => {
  try {
    const dados = req.body;
    // eslint-disable-next-line no-underscore-dangle
    const filter = { _id: dados._id };

    try {
      const result = await Iatf3Model.findByIdAndUpdate(filter, dados, {
        new: true,
        useFindAndModify: false,
      });
      return res.status(200).json({
        messagem: "Dados da 3 IATF + RT Atualizados com sucesso!",
        result,
      });
    } catch (error) {
      return res.status(400).json({
        error,
        mensagem: "Erro ao atualizar os dados da 3 IATF + RT",
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error, mensagem: "Erro ao atualizar os dados" });
  }
};
