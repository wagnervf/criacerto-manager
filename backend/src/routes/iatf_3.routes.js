// Rota de simulacaoController

const express = require("express");

const routerIatf3 = express.Router();
const iatf3Controller = require("../controllers/iatf_3.controllers");

// Salvar 3 IATF + RT
routerIatf3.post("/save", iatf3Controller.saveIatf3);

// Listar 3 IATF + RT
routerIatf3.get("/find", iatf3Controller.getIatf3);

// Listar 3 IATF + RT
routerIatf3.put("/update", iatf3Controller.updateIatf3);

module.exports = routerIatf3;
