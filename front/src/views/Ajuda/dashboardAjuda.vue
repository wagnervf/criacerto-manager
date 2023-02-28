<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-expansion-panels>
      <v-expansion-panel focusable>
        <v-expansion-panel-header class="teal--text text-subtitle-1">
          Filtrar os Dados
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-0">
          <v-card class="mx-auto">
            <v-card-subtitle>
              Componente fundamental para a usabilidade da tela de Dashboard
            </v-card-subtitle>

            <v-img
              class="my-2"
              src="../../assets/img/ajuda/filtroDados.png"
            />

            <v-divider />

            <v-card-text>
              <p>
                A Figura apresenta um importante parte da tela de Dashboard o
                FILTRO DE DADOS.
              </p>

              <p>
                <strong>
                  Com ele é possível filtrar a data que pretende visualizar os
                  dados além do Estado no qual a simulação foi realizada.
                </strong>
              </p>

              <ul>
                <li>
                  Na imagem é possível verificar que existe um total de 1234
                  (mil duzentos e trinta e quatro) Simulações, porém, após
                  realizar a filtragem da data de 06/04/2022 até 15/06/2022 e
                  escolher o Estado do Mato Grosso do Sul, apenas 60 (sessenta)
                  simulações foram encontradas.
                </li>

                <li>
                  Com os seguintes valores, Compra do Touro de R\$ 5.178,78 e o
                  valor do Sêmen de R\$ 25,98 como média de preços informados
                  nas simulações.
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Filtrar3</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mx-auto">
            <v-card-subtitle>
              Componente fundamental para a usabilidade da tela de Dashboard
            </v-card-subtitle>

            <v-divider />

            <v-img
              class="my-2"
              src="../../assets/img/ajuda/filtroDados.png"
            />

            <v-divider />

            <v-card-text>
              A Figura \ref{figura:dashboard1} apresenta um importante parte do
              \textit{Dashboard}, o filtro de dados, com ele é possível filtrar
              a data que pretende visualizar os dados além do Estado no qual a
              simulação foi realizada. Na imagem é possível verificar que existe
              um total de 1234 (mil duzentos e trinta e quatro) Simulações,
              porém, após realizar a filtragem da data de 06/04/2022 até
              15/06/2022 e escolher o Estado do Mato Grosso do Sul, apenas 60
              (sessenta) simulações foram encontradas. Com os seguintes valores,
              Compra do Touro de R\$ 5.178,78 e o valor do Sêmen de R\$ 25,98
              como média de preços informados nas simulações.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
//import headerExpansionVue from "../../components/headerExpansion.vue";

export default {
  name: "DashboardAjuda",
  //components: { headerExpansionVue },
  data: () => ({
    title: "Dashboard",
    icon: "mdi-chart-box",
    subtitle: "Tela de Dashboard",
  }),
};
</script>
