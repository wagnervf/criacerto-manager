
// Model de Evento

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  ecowSchema = new Schema({
    code: {
      type: String,
      required: true,
    },
    created:{
      type: String,
      required: true,
    },
    city:{
      type: String,
      required: true,
    },
    preco_touro:{
      type: String,
      required: true,
    },
    raca_touro:{
      type: String,
      required: true,
    },
    state:{
      type: String,
      required: true,
    },
    type:{
      type: String,
      required: true,
    },
    valor_venda:{
      type: String,
      required: true,
    },
  

},{
  collection: 'ecow'
});



const EcowModel = mongoose.model('ecow', ecowSchema);
module.exports =  EcowModel;