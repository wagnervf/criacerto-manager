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
          Nesta tela de gerenciamento dos usuários, os administradores concedem
          permissões a outros usuários.
        </p>

        <v-img
          class="my-2 ma-auto"
          max-height="600"
          max-width="800"
          src="../../assets/img/ajuda/gerenciarUser.png"
        />

        <v-divider />
        <br>

        <li>
          O sistema utiliza duas categorias de permissão, a categoria padrão,
          atribuído a todos os usuários que acessarem o sistema pela primeira
          vez, nela só será possível ter o acesso de leitura dos parâmetros,
          além de, não conseguir alterar as permissões de outros usuários.
        </li>
        <br>

        <li>
          O segunda modalidade de permissão é o nível administrador, que poderá
          gerenciar os parâmetros que serão utilizados pelo Cria Certo e
          modificar outros usuários.
        </li>
        <br>

        <li>
          <strong>
            Apenas o usuário administrador pode escolher um usuário da listagem
            e alterar o perfil dele para o papel de administrador.
          </strong>
        </li>
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
    title: "Gerenciar Usuários",
    icon: "mdi-account-cog",
    subtitle: "Ajuda da Tela de Gerenciar Usuários",
    dashDocUser: "",
  }),
};
</script>
