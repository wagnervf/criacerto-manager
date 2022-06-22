//Rota de simulacaoController


const express = require('express');
const routerMontaNatural= express.Router();
const montaNaturalController = require('../controllers/montaNatural.controllers');


//Salvar Dados Monta Natural
routerMontaNatural.post('/save', montaNaturalController.saveMontaNatural);

//Listar Dados Monta Natural
routerMontaNatural.get('/find', montaNaturalController.getMontaNatural);


//Listar Dados Monta Natural
routerMontaNatural.put('/update', montaNaturalController.updateMontaNatural);








module.exports = routerMontaNatural;