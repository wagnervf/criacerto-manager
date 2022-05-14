//Arquivo que realiza a conexão com o banco, a tring do banco está no .env
require('dotenv').config();

//console.log(process.env);

module.exports ={
  local: {
    localDataBaseUrl: 'mongodb://127.0.0.1:27017/managerdb',
    secret: process.env.SECRET_API,
  }
}

// a secret será usado no JWT


//mongodb://root:admin@localhost:27017/?authSource=admin&replicaSet=DockerConnect&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false