// Model de Evento

const mongoose = require("mongoose");

const { Schema } = mongoose;

const montaNaturalSchema = new Schema(
  {
    active: {
      type: Boolean,
    },
    aluguel_pasto: {
      type: Number,
    },
    city: {
      type: String,
    },
    code: {
      type: String,
    },
    dep: {
      type: Number,
    },
    despesas_compra: {
      type: Number,
    },
    exame_andrologico: {
      type: Number,
    },
    farm: {
      type: String,
    },
    juros_anuais: {
      type: Number,
    },

    numero_de_touros: {
      type: Number,
    },
    numero_de_vacas: {
      type: Number,
    },
    peso_comercial: {
      type: Number,
    },
    peso_elite: {
      type: Number,
    },
    preco_bezerro: {
      type: Number,
    },
    preco_touro: {
      type: Number,
    },
    raca_touro: {
      type: String,
    },
    racoes: {
      type: Number,
    },
    sal_mineral: {
      type: Number,
    },

    taxa_mortalidade: {
      type: Number,
    },
    taxa_prenhez: {
      type: Number,
    },
    type: {
      type: String,
    },
    vacinas_vermifugos: {
      type: Number,
    },
    valor_venda: {
      type: Number,
    },
    vida_util_touro: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: "montaNatural",
  }
);

const MontaNaturalModel = mongoose.model("montaNatural", montaNaturalSchema);
module.exports = MontaNaturalModel;
