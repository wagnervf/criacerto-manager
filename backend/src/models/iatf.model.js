// Model de IATF + RT

const mongoose = require("mongoose");

const { Schema } = mongoose;

const iatfRTSchema = new Schema(
  {
    active: {
      type: Boolean,
    },
    aluguel_pasto: {
      type: Number,
    },
    code: {
      type: String,
    },
    dep: {
      type: Number,
    },
    dep_iatf: {
      type: Number,
    },
    despesas_compra: {
      type: Number,
    },
    exame_andrologico: {
      type: Number,
    },
    juros_anuais: {
      type: Number,
    },
    mao_de_obra: {
      type: Number,
    },
    material_consumo: {
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
    peso_comercial_iatf: {
      type: Number,
    },
    peso_elite: {
      type: Number,
    },
    peso_elite_iatf: {
      type: Number,
    },
    preco_bezerro: {
      type: Number,
    },
    preco_semen: {
      type: Number,
    },
    preco_touro: {
      type: Number,
    },
    prenhez_iatf: {
      type: Number,
    },
    protocolo: {
      type: Number,
    },
    raca_touro: {
      type: String,
    },
    raca_touro_iatf: {
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
    vacas_inseminadas: {
      type: Number,
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
    collection: "iatfRT",
  }
);

const iatfRTSchemaModel = mongoose.model("iatfRT", iatfRTSchema);
module.exports = iatfRTSchemaModel;
