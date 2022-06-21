
// Model de Evento

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const montaNaturalSchema = new Schema({
  active: {
    type: Boolean,
    require: false,
  },
  aluguel_pasto: {
    type: Number,
    required: false,
  },
  changed: {
    type: Date,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: false,
  },
  created: {
    type: Date,
    required: false,
  },
  dep: {
    type: Number,
    required: false,
  },
  despesas_compra: {
    type: Number,
    required: false,
  },
  exame_andrologico: {
    type: Number,
    required: false,
  },
  farm: {
    type: String,
    required: false,
  },
  juros_anuais: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  numero_de_touros: {
    type: Number,
    required: false,
  },
  numero_de_vacas: {
    type: Number,
    required: false,
  },
  peso_comercial: {
    type: Number,
    required: false,
  },
  peso_elite: {
    type: Number,
    required: false,
  },
  preco_bezerro: {
    type: Number,
    required: false,
  },
  preco_touro: {
    type: Number,
    required: false,
  },
  raca_touro: {
    type: String,
    required: false,
  },
  racoes: {
    type: Number,
    required: false,
  },
  sal_mineral: {
    type: Number,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  taxa_mortalidade: {
    type: Number,
    required: false,
  },
  taxa_prenhez: {
    type: Number,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  vacinas_vermifugos: {
    type: Number,
    required: false,
  },
  valor_venda: {
    type: Number,
    required: false,
  },
  vida_util_touro: {
    type: Number,
    required: false,
  }

}, {
  collection: 'simulacoes'
});



const MontaNaturalModel = mongoose.model('simulacoes', montaNaturalSchema);
module.exports = MontaNaturalModel;


