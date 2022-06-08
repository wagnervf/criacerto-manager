<template>
<v-container fluid>      
    <v-card class="mx-1 mb-1" >
      <v-card-title class="pa-6 pb-3">
        <p>Total Simulações Realizadas</p>
        <v-spacer></v-spacer>
      </v-card-title>
      
      <v-card-text class="pa-6 pt-0" >
        <v-row no-gutters >
          <v-col cols="6" class="my-auto">
            <span style="font-size: 52px">
              {{ eCowCount }}
            </span>
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="6">
            <ApexChart
              height="100"
              type="bar"
              v-if="apexLoading"
              :options="mock.apexBar1.options"
              :series="mock.apexBar1.series"
            ></ApexChart>
          </v-col>
        </v-row>

        <v-row no-gutters class="py-2 justify-space-between">
          <div>
            <div class="subtext font-weight-bold">
              {{ aluguelPastoFormatado }}
              <v-icon color="success"> mdi-arrow-top-right</v-icon>
            </div>
            <div class="subtext-index flex-wrap">Aluguel 
               <p>Pasto</p></div>
          </div>
            
          <div>
            <div class="subtext font-weight-bold">
              {{ valorVendaFormatado
              }}<v-icon color="success"> mdi-arrow-top-right</v-icon>
            </div>
            <div class="subtext-index">Valor <p> da Venda</p></div>
          </div>
            
          <div>
            <div class="subtext font-weight-bold">
              {{taxaMortalidadeFormatado}}<v-icon color="error"> mdi-arrow-bottom-right</v-icon>
            </div>
            <div class="subtext-index">Taxa <p>Mortalidade</p></div>
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import eCow from "./e-cow";
import mock from "./mock";

import ApexChart from "vue-apexcharts";

export default {
  name: "Dashboard-Card-Total-Simulacoes",
  components: {
    ApexChart,
  },
  data() {
    return {
      eCow,
      mock,
      apexLoading: false,

      aluguelPasto: [],
      mediaAluguelPasto: 0,

      valorVenda: [],
      mediaValorVenda: 0,

      taxaMortalidade: [],
      mediaTaxaMortalidade: 0,
    };
  },

  mounted() {
    setTimeout(() => {
      this.apexLoading = true;
      this.eCowSimulations();
    }, 1000);

    this.getDados();
  },

  computed: {
    eCowCount() {
      return Object.keys(this.eCow).length;
    },

    aluguelPastoFormatado() {
      return this.mediaAluguelPasto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },

    valorVendaFormatado() {
      return this.mediaValorVenda.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },

    taxaMortalidadeFormatado() {
      return this.mediaTaxaMortalidade.toLocaleString(2);
      
    },
  },

  methods: {
    getDados() {
      var data = this.eCow;
      Object.values(data).forEach((value) => {
        let resul =
          typeof value.aluguel_pasto === "undefined" ? 0 : value.aluguel_pasto;
        this.aluguelPasto.push(resul);
      });

      Object.values(data).forEach((value) => {
        let resul =
          typeof value.valor_venda === "undefined" ? 0 : value.valor_venda;
        this.valorVenda.push(resul);
      });

      Object.values(data).forEach((value) => {
        let resul =
          typeof value.taxa_mortalidade === "undefined" ? 0 : value.taxa_mortalidade;
        this.taxaMortalidade.push(resul);
      });


      this.getMediaAluguelPasto();
      this.getMediaValorVenda();
      this.getMediaTaxaMortalidade();
    },




    getMediaAluguelPasto() {
      var value = 0;
      for (let index = 0; index < this.aluguelPasto.length; index++) {
        value = value + this.aluguelPasto[index];
      }
      this.mediaAluguelPasto = value / this.aluguelPasto.length;
    },

    getMediaValorVenda() {
      var value = 0;
      for (let index = 0; index < this.valorVenda.length; index++) {
        value = value + this.valorVenda[index];
      }
      this.mediaValorVenda = value / this.valorVenda.length;
    },

    getMediaTaxaMortalidade() {
      var value = 0;
      for (let index = 0; index < this.taxaMortalidade.length; index++) {
        value = value + this.taxaMortalidade[index];
      }
      this.mediaTaxaMortalidade = value / this.taxaMortalidade.length;
    },



    // separaRacasTouros() {
    //   const counts = {};
    //   this.aluguelPasto.forEach(function (x) {
    //     counts[x] = (counts[x] || 0) + 1;
    //   });
    //   Object.assign(this.racasSeparadas, counts);
    //   Object.assign(this.chartOptions.labels, Object.keys(this.racasSeparadas));
    //   this.chartOptions.series = Object.values(this.racasSeparadas);
    // },
  },
};
</script>
