// Arquivo que realiza a conexão com o banco, a tring do banco está no .env
require("dotenv").config();

const { DB_URI } = process.env;
const { SECRET_API } = process.env;

module.exports = {
  local: {
    localDataBaseUrl: DB_URI,
    secret: SECRET_API,
  },
};

// a secret será usado no JWT
