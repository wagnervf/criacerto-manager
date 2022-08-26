<template>
  <div>
    <v-card
      class="my-2"
      elevation="1"
    >
      <v-toolbar
        elevation="0"
        color="blue grey lighten-3"
        light
        dense
      >
        <v-toolbar-title> Raças de Touros </v-toolbar-title>

        <v-spacer />
        <v-btn
          class="mx-1"
          fab
          small
          color="success"
          title="Adicionar Raça de Touro"
          @click="inserirTouro"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-toolbar>

      <v-col
        cols="12"
        lg="12"
        justify-center
        flex
      >
        <v-form
          ref="form"
          v-model="valid"
          class="pa-0 white ma-1"
          lazy-validation
        >
          <div v-if="openInput">
            <v-alert
              outlined
              text
              color="grey lighten-2"
              radio
              class="px-4"
            >
              <v-text-field
                outlined
                ref="form.touro"
                v-model.trim="form.descricao"
                :rules="descricaoRules"
                placeholder="Inserir raça do touro"
                required
                class="mt-4 pa-2 teal--text"
              />
              <v-divider class="mx-4 my-0 pa-0" />
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="error"
                  text
                  @click="reset()"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  color="primary"
                  text
                  :disabled="!valid"
                  @click="salvarRaca"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-alert>
          </div>

          <v-row v-if="viewList">
            <v-col cols="10">
              <v-autocomplete
                v-model="form"
                :items="racasTouro"
                @click:clear="limpar()"
                label="Raça do Touro"
                required
                class="mt-4 pa-2 teal--text"
                clearable
                outlined
                hide-details
                flat
                return-object
              />
            </v-col>
            <v-col class="d-flex align-center">
              <v-btn
                class="mx-1"
                fab
                small
                color="primary"
                title="Editar Raça de Touro"
                :disabled="this.form.descricao == ''"
                @click="editTouro"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn
                class="mx-1"
                fab
                small
                color="error"
                title="Remover Raça de Touro"
                :disabled="this.form.descricao == ''"
                @click="deleteTouro"
              >
                <v-icon dark>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-card>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="350"
      >
        <v-card>
          <v-card-text class="text-body-1 py-2">
            Tem certeza que deseja deletar a Raça de Touro?
          </v-card-text>

          <v-card-title class="text-h5">
            {{ this.deletarDescricao }}
          </v-card-title>
          <v-divider />
          <v-card-actions>
            <v-spacer />

            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="error"
              text
              @click="deleteConfirm"
            >
              Deletar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import mixinUtils from "../mixins/mixin-utils";

export default {
  mixins: [mixinUtils],
  name: "ComponentRacasTouro",
  data: () => ({
    valid: true,
    racasTouro: [],
    viewList: true,
    openInput: false,
    dialog: false,
    deletarDescricao: "",

    form: {
      active: true,
      descricao: "",
    },

    salvar: false,
    editar: false,
    errorMessages: "",
    formHasErrors: false,
    descricaoRules: [(v) => !!v || "Campo Obrigatório!"],
  }),

  mounted() {
    this.getRacasTouro();
  },

  computed: {
    parametros() {
      return this.$store.getters.getRacasTouro;
    },
  },

  methods: {
    async salvarRaca() {
      let pal = this.form.descricao;
      pal = pal.toLowerCase();
      this.form.descricao = pal[0].toUpperCase() + pal.substr(1);

      if (this.$refs.form.validate()) {
        if (this.salvar) {
          const response = await this.$store.dispatch(
            "saveDadosRacasTouro",
            this.form
          );
          if (response.status == 201) {
            return this.updateSuccess();
          }
        } else {
          const response = await this.$store.dispatch(
            "updateDadosRacasTouro",
            this.form
          );

          if (response.status == 200) {
            return this.updateSuccess();
          }
        }
      }
    },

    getRacasTouro() {
      this.racasTouro = [];
      this.$store.dispatch("getRacasTouro");

      setTimeout(() => {
        this.parserDataStore();
      }, 1000);
    },

    updateSuccess() {
      this.openInput = false;
      this.editar = false;
      this.getRacasTouro();
      this.reset();
    },

    async deleteConfirm() {
      let id = this.form.value;

      let response = await this.$store.dispatch("deleteDadosRacasTouro", id);
      if (response.status == 200) {
        this.dialog = false;
        return this.updateSuccess();
      }
    },

    limpar() {
      this.reset();
    },

    reset() {
      this.form.descricao = "";
      this.openInput = false;
      this.salvar = false;
      this.editar = false;
      this.viewList = true;
    },

    parserDataStore() {
      this.racasTouro = this.parametros;
    },

    inserirTouro() {
      this.openInput = true;
      this.salvar = true;
      this.viewList = false;
    },

    editTouro() {
      this.openInput = true;
      this.editar = true;
      this.viewList = false;

      this.form = {
        _id: this.form.value,
        descricao: this.form.text,
        active: true,
      };
    },

    deleteTouro() {
      this.dialog = !this.dialog;
      this.deletarDescricao = this.form.text;
    },
  },
};
</script>
