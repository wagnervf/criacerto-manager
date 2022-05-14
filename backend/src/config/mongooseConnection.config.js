//
//Realiza a conexão com com banco usando o mongoose
//

const mongoose = require("mongoose");

//Importando a conexão com o DB
const databaseConfig = require("./db.config");

mongoose.Promise = global.Promise;

// ==> Conexão com o banco de dados
mongoose
  .connect(databaseConfig.local.localDataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then(
    () => {
      console.log("Base de dados conectada com sucesso!");
    },
    (erro) => {
      console.log(`Erro ao conectar com o banco: ${erro}`);
      process.exit();
    }
  );

