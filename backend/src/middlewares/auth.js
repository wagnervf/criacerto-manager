/*
// Arquivo responsável por confirmar se um determinado(a) User tem autorização
//
*/

const jwt = require("jsonwebtoken");

// Pegar o TOken do usuário e decodificar e autorizá-lo

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Verifique o token do usuário!" });
    }

    // secret está sendo usado no banco
    jwt.verify(token, "secret", (error, decoded) => {
      if (error) {
        return res.status(401).json({ error: "Token inválido" });
      }

      // passando o token codificado para o corpo da requisição
      req.userData = decoded;
      return false;
    });

    // passando o token codificado para o corpo da requisição
    // req.userData = decoded;

    // Avançar na rota e ir para Controllers
    next();
    //
    return false;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Falha na Autenticação!" });
  }
};
