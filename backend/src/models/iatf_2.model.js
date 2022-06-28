// Model de 2 IATF + RT

const mongoose = require("mongoose");

const { Schema } = mongoose;

const iatf_2RTSchema = new Schema(
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
    dep_iatf_2: {
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
    mao_de_obra_2: {
      type: Number,
    },
    material_consumo: {
      type: Number,
    },
    material_consumo_2: {
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
    preco_semen_2: {
      type: Number,
    },
    preco_touro: {
      type: Number,
    },
    prenhez_iatf: {
      type: Number,
    },
    prenhez_iatf_2: {
      type: Number
    },
    protocolo: {
      type: Number,
    },
    protocolo_2: {
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
    vacas_inseminadas_2: {
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
    collection: "iatf_2RT",
  }
);

const iatf_2RTModel = mongoose.model("iatf_2RT", iatf_2RTSchema);
module.exports = iatf_2RTModel;
