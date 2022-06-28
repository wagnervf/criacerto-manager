// Rota de simulacaoController

const express = require("express");

const routerIatfRT = express.Router();
const iatfRTController = require("../controllers/iatf.controllers");

// Salvar IATF + RT
routerIatfRT.post("/save", iatfRTController.saveIatfRT);

// Listar IATF + RT
routerIatfRT.get("/find", iatfRTController.getIatfRT);

// Listar IATF + RT
routerIatfRT.put("/update", iatfRTController.updateIatfRT);

module.exports = routerIatfRT;
