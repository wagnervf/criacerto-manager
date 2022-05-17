//
// Rotas relativas ao user
//

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const auth = require('../middlewares/auth');


// ==> Rota responsável por criar um novo 'User' - Post localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser)

// ==> Rota de login
router.post('/login', userController.loginUser);

// ==> Rota de userProfile
// Antes de acessar a rota, ele irár ao Auth verificar se o user existe para depois chamar a rota
router.get('/userProfile', auth, userController.returnUserProfile);


// ==> Lista de usuários
router.get('/list', userController.listUsers);


// ==> Atualizar de usuários
router.put('/update', userController.updateUser);



module.exports = router;