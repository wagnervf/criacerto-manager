// Arquivo inicial, será chamado antes de todos
// Esse arquivoe é chamado incialmente no package.json

const app = require("./src/app");

const { PORT } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("Aplicação executando na porta....:", PORT);
});
