<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card
      class="mx-auto pa-4 grey lighten-4"
      max-width="1440"
    >
      <v-card-title class="mb-12 primary white--text">
        Ajudas da tela de Dashboard
      </v-card-title>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header class="teal--text text-subtitle-1">
            Filtrar os Dados
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0">
            <v-card class="mx-auto">
              <v-card-subtitle>
                <strong>
                  Componente fundamental para a usabilidade da tela de Dashboard.
                </strong>
              </v-card-subtitle>

              <v-img
                class="my-2 ma-auto"
                max-height="600"
                max-width="800"
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

        <!-- ************************** -->

        <v-expansion-panel>
          <v-expansion-panel-header class="teal--text text-subtitle-1">
            Gráficos de Simulação por mês e Tipo de Simulações
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-card class="mx-auto">
              <v-card-subtitle>
                Nessa sessão é apresentado dois gráficos gerados na
                tela de Dashboard, o Indicador de Simulações por Mês e Tipo de Simulações
              </v-card-subtitle>

              <v-divider />

              <v-img
                class="my-2 ma-auto"
                max-height="600"
                max-width="800"
                src="../../assets/img/ajuda/dashboard2.png"
              />

              <v-divider />

              <v-card-text>
                <p>
                  <ul>
                    <strong> <li>Gráfico de Simulação Por Mês</li> </strong>
                    Apresenta a quantidade de simulações por mês, separados por
                    tipos de simulação.

                    <strong> <li>Gráfico Tipos de Simulações</li></strong>
                    No segundo gráfico é possível verificar a porcentagem dos
                    tipos de Simulações. Com base na imagem é possível verificar
                    que a Simulação do tipo IATF foi a mais empregada dentro do
                    filtro aplicado no início.
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- ************************** -->

        <v-expansion-panel>
          <v-expansion-panel-header class="teal--text text-subtitle-1">
            Gráficos de Raças de Touros e Quantitativo de Simulações por Estados
          </v-expansion-panel-header>
          
          <v-expansion-panel-content>
            <v-card class="mx-auto">
              <v-card-subtitle>
                Nessa sessão é apresentado dois gráficos gerados na
                tela de Dashboard, o Gráficos de Tipos de Touros e Quantitativo de Simulações por Estados
              </v-card-subtitle>

              <v-divider />

              <v-img
                class="my-2 ma-auto"
                max-height="600"
                max-width="800"
                src="../../assets/img/ajuda/tiposTouros_Estados.png"
              />

              <v-divider />

              <v-card-text>
                <p>
                  <ul>
                    <strong> <li> Gráficos de Raças de Touros</li> </strong>
                    <p> Demonstrativo das raças de touros simuladas pelos usuários, na imagem podemos notar que a raça Nelore é a mais utilizada nas simulações. </p>

                    <strong> <li>Quantitativo de Simulações por Estados</li></strong>
                    <p>Um comparativo da quantidade de simulações realizadas por Estado.</p>
                    <p>
                      O valor <strong>null</strong> ocorre quando, eventualmente, durante uma simulação no Cria Certo, os usuários não informarem o seu Estado,
                      logo, o valor não poderá ser catalogados, como visto na Figura a cima.  
                    </p>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      
      
      
        <!-- ************************** -->

        <v-expansion-panel>
          <v-expansion-panel-header class="teal--text text-subtitle-1">
            Gráficos de Médias do Número de Vacas Simuladas por Tipo de Simulação
          </v-expansion-panel-header>
          
          <v-expansion-panel-content>
            <v-card class="mx-auto">
              <v-img
                class="my-2 ma-auto"
                max-height="600"
                max-width="800"
                src="../../assets/img/ajuda/medias_vacas.png"
              />

              <v-divider />

              <v-card-text>
                <p>
                  <ul>
                    <strong> <li> Médias do número de vacas simuladas separadas por tipos de simulação</li> </strong>
                    <p>
                      Aqui apresentado as médias do número de vacas simuladas separadas por tipos de simulação, na imagem podemos observar que o tipo de simulação duas inseminação artificial em tempo fixo mais repasse de touro (2 IATF + RT) é a que mais utiliza vacas durante as simulações.
                    </p>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      
        <!-- ************************** -->

        <v-expansion-panel>
          <v-expansion-panel-header class="teal--text text-subtitle-1">
            Tabela com todas as simulações
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-card class="mx-auto">
              <v-card-subtitle>
                Tabela dinâmica com todas as simulações
              </v-card-subtitle>

              <v-divider />

              <v-img
                class="my-2 ma-auto"
                max-height="600"
                max-width="800"
                src="../../assets/img/ajuda/tabela_dinamica.png"
              />

              <v-divider />

              <v-card-text>
                <p>
                  <ul>
                    <strong> <li>Tabela dinâmica com todas as simulações</li> </strong>
                    Apresenta uma tabela com todas as simulações já realizadas..

                    <p>
                      Aqui é apresentado uma tabela dinâmica com todas as simulações realizadas e salvas no Cria Certo,
                      nela é possível alterar a agrupação das colunas, na imagem de exemplo está agrupado por tipo de Simulação, porém, 
                      também é possível agrupar por Estados, Cidades, Taxa de Prenhez ou Data, além de, pesquisar por um item específico e 
                      selecionar a quantidade de linhas que deseja visualizar na tabela.
                      
                    </p>
                    <p>Além disso, é possível acompanhar como os usuários estão utilizando o aplicativo, monitorar as médias de preços que estão simulando e identificar os seus padrões de comportamento.</p>
                  </ul>
                </p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
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
