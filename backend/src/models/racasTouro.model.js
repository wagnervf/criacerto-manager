// Model de Racas Touro

const mongoose = require("mongoose");

const { Schema } = mongoose;

const racasTouroSchema = new Schema(
  {
    active: {
      type: Boolean,
    },
    descricao: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "racasTouro",
  }
);

const racasTouroModel = mongoose.model("racasTouro", racasTouroSchema);
module.exports = racasTouroModel;
