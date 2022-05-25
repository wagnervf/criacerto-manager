// Funções para o CRUD

// const { resource } = require("../app");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
// Método de registro do usuário
// Método POST criado em user.routes userController.registerNewUser
exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email });

    //User já existe
    if (isUser.length > 1) {
      return res.status(409).json({
        message: "Erro! Esse e-mail já encontra-se em uso!",
        type: "email",
      });
    }

    //Corpo da requisição
    const newUser = new User(req.body);

    //Método do moogose para salvar os dados
    //Salvará os dados do user auth
    //Save vem do mongosse
    const user = await newUser.save();

    //Método que gerará um token
    // Método vindo de User.model
    const token = await newUser.generateAuthToken();

    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso!", user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Erro! O usuário não foi criado!" });
  }
};

//
//
// Login
//
//
exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const senha = req.body.senha;
    const user = await User.findByCredentials(email, senha);

    if (!user || user == null) {
      return res
        .status(401)
        .send({ error: "Erro ao realizar o Login! Verifque a sua conta" });
    }

    //Buscando o token do usuário
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Usuário(a) logado com sucesso!", user, token });
  } catch (err) {
    return res
      .status(401)
      .send({ err: "Erro ao realizar o Login! Verifque a sua conta" });
    //  res.status(400).json({ err: err });
  }
};

//
//
// Authenticate
//
//
exports.authenticate = async (req, res) => {
  try {
    const email = req.body.email;
    const senha = req.body.senha;

    // Recuperando o usuário pelo email e trazendo a senha.
    const user = await User.findOne({ email }).select("+senha");

    if (!user) {
      return res.status(400).send({ error: "Usuário não encontrado!" });
    }

    if (!(await bcrypt.compare(senha, user.senha))) {
      return res.status(400).send({ error: "Senha inválida!" });
    }

    //Buscando o token do usuário
    const token = await user.generateAuthToken();

    // Não mostrar a senha ao recuperar o usuário
    user.senha = undefined;

    return res
      .status(200)
      .json({ message: "Usuário(a) logado com sucesso!", user, token });
    //
  } catch (error) {
    return res.status(400).send({ err: "Usuário não encontrado!" });
  }
};
//
//
//

exports.returnUserProfile = async (req, res) => {
  //Esperando o token decodificado do auth.js
  await res.json(req.userData);
};

//
//
// Lista Todos Usuários
//
//
exports.listUsers = async (req, res) => {
  try {
    User.find({}, (err, docs) => {
      if (err) {
        return res.status(401).json({ Erro: err });
      }

      if (docs.length === 0) {
        return res.status(404).json({ message: "Nada foi encontrado" });
      }

      return res.status(200).json({ dados: docs });
    });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

//
//
// Update Usuário
//
//
exports.updateUser = async (req, res) => {
  try {
    const dadosUser = req.body;
    const result = await User.findByIdAndUpdate(
      { _id: dadosUser._id },
      {
        $set: {
          nome: dadosUser.nome,
          email: dadosUser.email,
        //  perfil: dadosUser.perfil,
          local: dadosUser.local,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    console.log(result);
    return res.status(200).json({ dados: result });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const dados = req.body.id;
    console.log(req.body)
    const result = await User.findByIdAndRemove({ _id: dados });

    console.log(result);
    return res.status(200).json({ message: "Usuário removido com sucsesso!" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Erro ao remover usuário" });
  }
};
