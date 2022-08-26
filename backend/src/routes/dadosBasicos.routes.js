// Rota de Dados Básicos

const express = require("express");

const routerdadosBasicos = express.Router();
const racasTouroController = require("../controllers/racasTouro.controllers");

// Listar Racas de Touro
routerdadosBasicos.get("/racastouro/find", racasTouroController.getRacasTouro);

// Salvar Racas de Touro
routerdadosBasicos.post(
  "/racastouro/save",
  racasTouroController.saveRacasTouro
);

// Update Raças de Touro
routerdadosBasicos.put(
  "/racastouro/update",
  racasTouroController.updateRacasTouro
);

// Delete Raças de Touro
routerdadosBasicos.delete(
  "/racastouro/delete",
  racasTouroController.deleteRacasTouro
);

module.exports = routerdadosBasicos;
