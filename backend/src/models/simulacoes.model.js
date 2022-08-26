
// Model de Evento

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiposSimulacoesSchema = new Schema({
  active:{
    type: Boolean,
    require: true,
  },
 aluguel_pasto:{
    type: Number,
    required: true,
  },
 changed:{
  type: Date,
  required: true,
},
 city:{
    type: String,
    required: true,
  },
 code:{
    type: String,
    required: true,
  },
 created:{
  type: Date,
  required: true,
},
 dep:{
    type: Number,
    required: true,
  },
 despesas_compra:{
    type: Number,
    required: true,
  },
 exame_andrologico:{
    type: Number,
    required: true,
  },
 farm:{
    type: String,
    required: true,
  },
 juros_anuais:{
    type: Number,
    required: true,
  },
 name:{
    type: String,
    required: true,
  },
 numero_de_touros:{
    type: Number,
    required: true,
  },
 numero_de_vacas:{
    type: Number,
    required: true,
  },
 peso_comercial:{
    type: Number,
    required: true,
  },
 peso_elite:{
    type: Number,
    required: true,
  },
 preco_bezerro:{
    type: Number,
    required: true,
  },
 preco_touro:{
    type: Number,
    required: true,
  },
 raca_touro:{
    type: String,
    required: true,
  },
 racoes:{
    type: Number,
    required: true,
  },
 sal_mineral:{
    type: Number,
    required: true,
  },
 state:{
    type: String,
    required: true,
  },
 taxa_mortalidade:{
    type: Number,
    required: true,
  },
 taxa_prenhez:{
    type: Number,
    required: true,
  },
 type:{
    type: String,
    required: true,
  },
 vacinas_vermifugos:{
    type: Number,
    required: true,
  },
 valor_venda:{
    type: Number,
    required: true,
  },
 vida_util_touro:{
    type: Number,
    required: true,
  }
 
},{
  collection: 'tipos_simulacoes'
});



const TiposSimulacoesModel = mongoose.model('tipos_simulacoes', tiposSimulacoesSchema);
module.exports = TiposSimulacoesModel;

 