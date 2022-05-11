//Arquivo que realiza a conexão com o banco, a tring do banco está no .env
require('dotenv').config();


module.exports ={
  local: {
    localDataBaseUrl : process.env.DB_URI,
    secret:  process.env.SECRET_API,
  }
}

// a secret será usado no JWT