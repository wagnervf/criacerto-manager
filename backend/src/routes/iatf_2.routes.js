// Rota de simulacaoController

const express = require("express");

const routerIatf2RT = express.Router();
const iatf2RTController = require("../controllers/iatf_2.controllers");

// Salvar IATF + RT
routerIatf2RT.post("/save", iatf2RTController.saveIatf_2RT);

// Listar IATF + RT
routerIatf2RT.get("/find", iatf2RTController.getIatf_2RT);

// Listar IATF + RT
routerIatf2RT.put("/update", iatf2RTController.updateIatf_2RT);

module.exports = routerIatf2RT;
