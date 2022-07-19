<template>
  <div>
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-0">
        <v-row no-gutters>
          <v-col
            cols="7"
            sm="4"
            md="4"
            lg="5"
            class="d-flex align-center"
          >
            <p>Tipo de Simulações mais utilizadas</p>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row>
          <v-col v-if="visivel">
            <v-progress-linear
              indeterminate
              color="cyan"
              :query="true"
            />
          </v-col>
          <v-col v-else>
            <ApexChart
              type="bar"
              height="350"
              :options="chartOptions"
              :series="series"
            />

            <ApexChart
              type="area"
              height="350"
              :options="chartOptions2"
              :series="series"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";
import typesSimulations from "../../assets/json/typesSimulations.json";
import moment from "moment";
export default {
  name: "DashboardChartColumn",
  components: {
    ApexChart,
  },
  data() {
    return {
      typesSimulations: typesSimulations,
      types: {
        montaNatural: [],
        iatf: [],
        iatf_2: [],
        iatf_3: [],
      },
      series: [
        {
          name: "Monta Natural",
          data: [],
        },
        {
          name: "IATF+RT",
          data: [],
        },
        {
          name: "IATF+2RT",
          data: [],
        },
        {
          name: "IATF+3RT",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "65%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          lines: {
            show: true,
          },
        },
        yaxis: {
          title: {
            text: "Quantidade",
          },
        },

        fill: {
          opacity: 2,
        },
        tooltip: {
          y: {
            formatter(val) {
              return `$ ${val} thousands`;
            },
          },
        },
      },
      chartOptions2: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
        },
        // tooltip: {
        //   x: {
        //     format: "dd/MM/yy HH:mm",
        //   },
        // },
      },
      visivel: false,
      todosDados: [],
      meses: {
        jan: 0,
        fev: 0,
        mar: 0,
        abr: 0,
        mai: 0,
        jun: 0,
        jul: 0,
        ago: 0,
        set: 0,
        out: 0,
        nov: 0,
        dez: 0,
      },
    };
  },

  mounted() {
    setTimeout(() => {
      this.getData();
      this.visivel = true;
    }, 1500);
  },
  computed: {
    eCowData() {
      return this.$store.getters.getDataEcow;
    },
    eCowDataFiltered() {
      return this.$store.getters.geteCowFilteredPeriodo;
    },
  },
  methods: {
    getData() {
      Object.assign(this.todosDados, this.eCowDataFiltered);

      //Primeiro Filtro por Data
      this.filterTypeSimulacao(this.todosDados);
    },

    filterTypeSimulacao(data) {
      Object.values(data).forEach((value) => {
        this.switchTypes(value);

        return this.types;
      });

      this.switchQtdMeses();
    },

    switchTypes(value) {
      switch (value.type) {
        case this.typesSimulations.monta:
          this.types.montaNatural.push(value);
          break;

        case this.typesSimulations.iatf:
          this.types.iatf.push(value);
          break;

        case this.typesSimulations.iatf_2:
          this.types.iatf_2.push(value);
          break;

        case this.typesSimulations.iatf_3:
          this.types.iatf_3.push(value);
          break;
      }
    },

    switchQtdMeses() {
      let tipos = {
        monta: [],
        iatf: [],
        iatf_2: [],
        iatf_3: [],
      };

      console.log(this.types);

      this.types.montaNatural.forEach((value) => {
        let mes = moment(value.created).format("M");
        switch (mes) {
          case "1":
            this.meses.jan += 1;
            break;
          case "2":
            this.meses.fev += 1;
            break;
          case "3":
            this.meses.mar += 1;
            break;
          case "4":
            this.meses.abr += 1;
            break;
          case "5":
            this.meses.mai += 1;
            break;
          case "6":
            this.meses.jun += 5;
            break;
          case "7":
            this.meses.jul += 5;
            break;
          case "8":
            this.meses.ago += 1;
            break;
          case "9":
            this.meses.set += 1;
            break;
          case "10":
            this.meses.out += 1;
            break;
          case "11":
            this.meses.nov += 1;
            break;
          case "12":
            this.meses.dez += 1;
            break;
        }
      });
      this.series[0].data = Object.values(this.meses);
      tipos.monta = Object.values(this.meses);

      this.types.iatf.forEach((value) => {
        let mes = moment(value.created).format("M");
        switch (mes) {
          case "1":
            this.meses.jan += 1;
            break;
          case "2":
            this.meses.fev += 1;
            break;
          case "3":
            this.meses.mar += 1;
            break;
          case "4":
            this.meses.abr += 1;
            break;
          case "5":
            this.meses.mai += 1;
            break;
          case "6":
            this.meses.jun += 5;
            break;
          case "7":
            this.meses.jul += 5;
            break;
          case "8":
            this.meses.ago += 1;
            break;
          case "9":
            this.meses.set += 1;
            break;
          case "10":
            this.meses.out += 1;
            break;
          case "11":
            this.meses.nov += 1;
            break;
          case "12":
            this.meses.dez += 1;
            break;
        }
      });
      this.series[1].data = Object.values(this.meses);
      tipos.iatf = Object.values(this.meses);

      this.types.iatf_2.forEach((value) => {
        let mes = moment(value.created).format("M");

        switch (mes) {
          case "1":
            this.meses.jan += 1;
            break;
          case "2":
            this.meses.fev += 1;
            break;
          case "3":
            this.meses.mar += 1;
            break;
          case "4":
            this.meses.abr += 1;
            break;
          case "5":
            this.meses.mai += 1;
            break;
          case "6":
            this.meses.jun += 5;
            break;
          case "7":
            this.meses.jul += 5;
            break;
          case "8":
            this.meses.ago += 1;
            break;
          case "9":
            this.meses.set += 1;
            break;
          case "10":
            this.meses.out += 1;
            break;
          case "11":
            this.meses.nov += 1;
            break;
          case "12":
            this.meses.dez += 1;
            break;
        }
      });
      this.series[2].data = Object.values(this.meses);
      tipos.iatf_2 = Object.values(this.meses);

      this.types.iatf_3.forEach((value) => {
        let mes = moment(value.created).format("M");

        switch (mes) {
          case "1":
            this.meses.jan += 1;
            break;
          case "2":
            this.meses.fev += 1;
            break;
          case "3":
            this.meses.mar += 1;
            break;
          case "4":
            this.meses.abr += 1;
            break;
          case "5":
            this.meses.mai += 1;
            break;
          case "6":
            this.meses.jun += 1;
            break;
          case "7":
            this.meses.jul += 1;
            break;
          case "8":
            this.meses.ago += 1;
            break;
          case "9":
            this.meses.set += 1;
            break;
          case "10":
            this.meses.out += 1;
            break;
          case "11":
            this.meses.nov += 1;
            break;
          case "12":
            this.meses.dez += 1;
            break;
        }
      });
      this.series[3].data = Object.values(this.meses);
      tipos.iatf_3 = Object.values(this.meses);

      console.log(tipos);

      this.visivel = true;
      setTimeout(() => {
        //  this.series[0].data = Object.values(this.meses);
        this.visivel = false;
      }, 1500);

      //  console.log(this.series);
      // console.log(this.meses);
    },

    getMonthSimulations(value) {
      let meses = {
        jan: 0,
        fev: 0,
        mar: 0,
        abr: 0,
        mai: 0,
        jun: 0,
        jul: 0,
        ago: 0,
        set: 0,
        out: 0,
        nov: 0,
        dez: 0,
      };
      let mes = moment(value).format("M");
      console.log(mes);

      switch (mes) {
        case "1":
          meses.jan += 1;
          break;
        case "2":
          meses.fev += 1;
          break;
        case "3":
          meses.mar += 1;
          break;
        case "4":
          meses.abr += 1;
          break;
        case "5":
          meses.mai += 1;
          break;
        case "6":
          meses.jun += 1;
          break;
        case "7":
          meses.jul += 2;
          break;
        case "8":
          meses.ago += 1;
          break;
        case "9":
          meses.set += 1;
          break;
        case "10":
          meses.out += 1;
          break;
        case "11":
          meses.nov += 1;
          break;
        case "12":
          meses.dez += 1;
          break;
      }

      console.log(meses);
    },
  },
};
</script>

<!--
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()]; 
-->
