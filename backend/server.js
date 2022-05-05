// Arquivo inicial, será chamado antes de todos
// Esse arquivoe é chamado incialmente no package.json

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação executando na porta....:' , port);
    
})
