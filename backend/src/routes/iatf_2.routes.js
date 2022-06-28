// Rota de simulacaoController

const express = require("express");

const routerIatf_2RT = express.Router();
const iatf_2RTController = require("../controllers/iatf_2.controllers");

// Salvar IATF + RT
routerIatf_2RT.post("/save", iatf_2RTController.saveIatf_2RT);

// Listar IATF + RT
routerIatf_2RT.get("/find", iatf_2RTController.getIatf_2RT);

// Listar IATF + RT
routerIatf_2RT.put("/update", iatf_2RTController.updateIatf_2RT);

module.exports = routerIatf_2RT;
