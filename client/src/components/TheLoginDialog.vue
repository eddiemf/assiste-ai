<template>
  <v-dialog v-model="visible" max-width="720px">
    <v-card light>
      <div class="pa-3">
        <v-card-media contain src="/static/logo_light.png" height="110px"></v-card-media>
      </div>

      <v-divider light></v-divider>

      <v-card-text>
        <v-container grid-list-md class="text-xs-center">
          <v-layout wrap>
            <v-flex>
              <h1 class="headline flex">Faça login pela sua rede social favorita</h1>

              <v-layout wrap>
                <v-flex md6 offset-md3>
                  <v-layout wrap justify-space-between>
                    <v-btn fab icon large color="blue darken-2">
                      <v-icon large>fa-facebook</v-icon>
                    </v-btn>
                    <v-btn fab icon large color="orange darken-1" disabled>
                      <v-icon large>fa-envelope</v-icon>
                    </v-btn>
                    <v-btn fab icon large color="grey darken-3" disabled>
                      <v-icon large>fa-github</v-icon>
                    </v-btn>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex md6 offset-md3>
              <v-layout align-center class="mt-3">
                <v-divider light class="ma-3"></v-divider>ou<v-divider light class="ma-3"></v-divider>
              </v-layout>

              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                light
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                ></v-text-field>
                <v-text-field
                light
                label="Password"
                v-model="password"
                :rules="passwordRules"
                required
                type="password"
                ></v-text-field>
                <div>
                  <v-btn light @click="submit">Entrar</v-btn>
                  <v-btn primary >Registrar-se</v-btn>
                </div>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn light flat @click.native="visible = false">Prosseguir sem fazer login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      visible: !this.isLoggedIn,
      valid: false,
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
};
</script>
