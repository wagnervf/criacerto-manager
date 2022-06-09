//Arquivo responsável pelo modulo de classe User

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nome: { type: String, maxlength: 50, required: true },
    email: {
      type: String,
      maxlength: 50,
      required: true,
      unique: true,
      lowercase: true,
    },
    senha: { type: String, required: true, select: false },
   // perfil: { type: String, required: true },
    local: { type: String },
    tecnico: { type: Boolean },
    admin: { type: Boolean },

    tokens: [
      {
        token: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    // Collection que será salva no mongo - TABELA
    collection: "users",
  }
);

//Criptografia
//Fazer o hash da senha antes de salvar
userSchema.pre("save", async function (next) {
  const user = this;

  //se o senha do usuário estiver sendo alterado, encripta ela
  // Senha do usuário tamanhp de 6 caracteres
  if (user.isModified("senha")) {
    user.senha = await bcrypt.hash(user.senha, 6);
  }
  next();
});

// Criando o token jwt do usuário
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  //Utiliza o id, nome e email para gerar um token e adicionar o campo 'secret' para compor o token do user
  // O secret é uma string usada para gerar o token, nesse caso é a senha do user, está configurado em db.config.js
  const token = jwt.sign(
    {
      _id: user._id,
      nome: user.nome,
      email: user.email,
    },
    "secret" , {
      expiresIn: 86400,
    }
  );

  user.tokens = user.tokens.concat({ token });
  //
  await user.save();
  return token;
};

//
//pesquisa usando o email do user
//
userSchema.statics.findByCredentials = async (email, senha) => {
  const user = await User.findOne({ email });
  console.log("findByCredentials : ".concat(user));

  if (!user || user == null) {
    throw new Error({ error: "Login inválido!" });
  }

  //Confere se a senha existe
  //Compara a senha informada com a senha do usuário que foi encotrado na consulta User.findOne({ email });
  const isSenhaMatch = await bcrypt.compare(senha, user.senha);

  if (!isSenhaMatch) {
    throw new Error({ error: "Senha inválida!" });
  }

  // caso não contenha nenhum erro retorna o user
  return user;
};

//
//
// Retornar todos o usuários
//
//
//  findAllUsers() async {
//   const users = await User.find({});

//   return users;

// };

//
//
//
const User = mongoose.model("User", userSchema);
module.exports = User;
