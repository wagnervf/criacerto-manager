// Arquivo responsável por executar a rota default da API

const express = require("express");

const router = express.Router();

router.get("/api/v1", (req, res) => {
  res.status(200).send({
    sucess: true,
    message: "Seja bem-vindo(a) ao Backend Cria Certo Manager",
    version: "1.0.0",
  });
});

module.exports = router;
