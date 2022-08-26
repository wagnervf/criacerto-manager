// Model de 2 IATF + RT

const mongoose = require("mongoose");

const { Schema } = mongoose;

const iatf3Schema = new Schema(
  {
    active: {
      type: Boolean,
    },
    code: {
      type: String,
    },
    dep_iatf: {
      type: Number,
    },
    dep_iatf_2: {
      type: Number,
    },
    dep_iatf_3: {
      type: Number,
    },
    mao_de_obra: {
      type: Number,
    },
    mao_de_obra_2: {
      type: Number,
    },
    mao_de_obra_3: {
      type: Number,
    },
    material_consumo: {
      type: Number,
    },
    material_consumo_2: {
      type: Number,
    },
    material_consumo_3: {
      type: Number,
    },
    numero_de_vacas: {
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
    preco_semen_3: {
      type: Number,
    },
    prenhez_iatf: {
      type: Number,
    },
    prenhez_iatf_2: {
      type: Number,
    },
    prenhez_iatf_3: {
      type: Number,
    },
    protocolo: {
      type: Number,
    },
    protocolo_2: {
      type: Number,
    },
    protocolo_3: {
      type: Number,
    },
    raca_touro_iatf: {
      type: String,
    },
    taxa_mortalidade: {
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
    vacas_inseminadas_3: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: "iatf3",
  }
);

const iatf3Model = mongoose.model("iatf3", iatf3Schema);
module.exports = iatf3Model;
