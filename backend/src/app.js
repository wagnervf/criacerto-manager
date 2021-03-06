// Responsável por fazer a chamada da rotas da aplicação

// Importações
const cors = require("cors");
const morgan = require("morgan");

// Principal
const express = require("express");

const app = express();

// Habilitando formatos para utilizar nas chamdas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

// Conexão com Banco de Dados
const mongooseConnection = require("./config/mongooseConnection.config");

// Habilitando a conexão com o Banco de Dados
app.set("mongosse connection", mongooseConnection);

// Rotas da API:
const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const ecowRoutes = require("./routes/ecow.routes");
const montaNaturalRoutes = require("./routes/montaNatural.routes");
const iatfRoutes = require("./routes/iatf.routes");
const iatf2Routes = require("./routes/iatf_2.routes");
const iatf3Routes = require("./routes/iatf_3.routes");
const dadosBasicos = require("./routes/dadosBasicos.routes");

app.use(index);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/ecow", ecowRoutes);
app.use("/api/v1/montanatural", montaNaturalRoutes);
app.use("/api/v1/iatf", iatfRoutes);
app.use("/api/v1/iatf2", iatf2Routes);
app.use("/api/v1/iatf3", iatf3Routes);
app.use("/api/v1/dadosbasicos", dadosBasicos);

// Exportando o app
module.exports = app;
