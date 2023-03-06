<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card class="mx-auto">
      <headerList
        :title="title"
        :icon="icon"
        :subtitle="subtitle"
        :icon-expand="icon"
        :rota="dash"
      />

      <v-divider />

      <v-card-text>
        <p>
          A tela das simulações desempenha uma importante finalidade no Cria
          Certo Manager, é nesta tela que serão gerenciados os parâmetros que
          serão utilizados no aplicativo Cria Certo.
        </p>

        <v-img
          class="my-2 ma-auto"
          max-height="600"
          max-width="800"
          src="../../assets/img/ajuda/lista_simulacoes.png"
        />

        <v-divider />

        <p>
          A Figura acima apresenta a tela do Cria Certo Manager que lista todas
          as simulações atualmente existentes no aplicativo Cria Certo e uma
          breve descrição de cada item.
        </p>
        <p>
          A partir dessa tela o usuário terá acesso aos parâmetros das
          simulações, além disso, é apresentada uma opção para acesso aos Dados
          Básicos das Simulações, são parâmetros comuns às todas as simulações
          como, por exemplo, raça de touros e preço do aluguel do pasto.
        </p>

        <p>
          Ao clicar no primeiro item da listagem da Figura Monta Natural, o
          usuário terá a possibilidade de editar os parâmetros do tipo de
          simulação Monta Natural, separado por etapas, assim como no
          aplicativo, essa simulação apresenta três etapas, são elas: dados
          técnicos do rebanho, aquisição de touro e manutenção anual do touro.
        </p>

        <p>
          E cada uma das etapas possui diversos parâmetros, utilizados como
          referência durante as simulações do aplicativo Cria Certo.
        </p>

        <v-img
          class="my-2 ma-auto"
          max-height="600"
          max-width="800"
          src="../../assets/img/ajuda/monta_natural_aquis_touro.png"
        />
        <ul>
          <strong>
            <li>
              Editando os valores da fase "Aquisição de Touro" da simulação
              Monta Natural
            </li>
          </strong>
        </ul>
        <br>
        <p>
          <strong>Ao alterar um valor o usuário deve clicar em Salvar.</strong>
        </p>

        <p>
          Logo, todo valor alterado e salvo nesta tela, atualizará a base de
          dados do aplicativo Cria Certo, que terá os valores disponíveis para
          serem requisitados do aplicativo.
        </p>

        <p>
          Na Figura acima é possível observar os parâmetros da fase Aquisição de
          Touro do Aplicativo Cria Certo, com na tela fase 3 da Simulação Monta
          Natural do aplicativo Cria Certo, que ela foi projetada.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import headerList from "../../components/headerList.vue";

export default {
  components: { headerList },
  name: "ParametrosAjuda",
  data: () => ({
    title: "Ajuda Parâmetros do Cria Certo",
    icon: "mdi-database",
    subtitle:
      "Tela de Gerenciamento e Visualização dos Parâmetros do Cria Certo",

    dash: "",
  }),
};
</script>
