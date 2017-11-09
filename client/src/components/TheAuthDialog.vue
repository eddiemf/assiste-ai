<template>
  <v-dialog v-model="visible" max-width="720px" @keydown.esc="visible = false">
    <v-card light>
      <div class="pa-3">
        <v-card-media contain src="/static/logo_light.png" height="110px"></v-card-media>
      </div>

      <v-divider light></v-divider>

      <transition name="fade" mode="out-in">
        <v-card-text v-if="!register" key="login-card">
          <v-container grid-list-md class="text-xs-center">
            <v-layout wrap>
              <v-flex>
                <h1 class="headline flex">Faça login por sua plataforma favorita</h1>

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

                <v-form ref="loginForm" lazy-validation>
                  <v-text-field
                  light
                  label="E-mail"
                  v-model="email"
                  :rules="[rules.required]"
                  validate-on-blur
                  ></v-text-field>
                  <v-text-field
                  light
                  label="Senha"
                  v-model="password"
                  :rules="[rules.required]"
                  type="password"
                  validate-on-blur
                  ></v-text-field>
                  <div>
                    <v-btn
                    id="submitLogin"
                    light
                    @click="login"
                    :loading="loginLoading"
                    :disabled="loginLoading">Entrar</v-btn>
                    <v-btn primary @click="register = true">Registrar-se</v-btn>
                  </div>
                  <v-tooltip
                    v-model="showLoginTooltip"
                    bottom
                    color="white"
                    activator="#submitLogin"
                  >
                    <span class="red--text" v-text="loginErrorMessage"></span>
                  </v-tooltip>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-text v-else key="register-card">
          <v-container>
            <v-layout wrap>
              <v-flex md6 offset-md3>
                <v-form ref="signUpForm" lazy-validation>
                  <v-text-field
                  light
                  label="Nome"
                  v-model="registerName"
                  :rules="[rules.required]"
                  validate-on-blur
                  ></v-text-field>
                  <v-text-field
                  light
                  label="E-mail"
                  v-model="registerEmail"
                  :rules="[rules.email]"
                  type="email"
                  validate-on-blur
                  ></v-text-field>
                  <v-text-field
                  light
                  label="Senha"
                  v-model="registerPassword"
                  :rules="[rules.password]"
                  type="password"
                  validate-on-blur
                  ></v-text-field>
                  <v-btn
                    id="submitRegister"
                    class="mt-2"
                    light
                    block
                    :loading="registerLoading"
                    :disabled="registerLoading"
                    @click="submitRegister"
                  >
                    <span v-if="!registerLoading" v-text="!registerLoading && !registerSuccess ? 'Finalizar' : 'Cadastrado com sucesso'"></span>
                    <v-icon v-if="registerSuccess" right dark color="green">fa-check</v-icon>
                  </v-btn>
                  <v-tooltip
                    v-model="showSignUpTooltip"
                    bottom
                    color="white"
                    activator="#submitRegister"
                  >
                    <span class="red--text" v-text="signUpErrorMessage"></span>
                  </v-tooltip>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </transition>

      <v-card-actions>
        <transition name="fade" mode="out-in">
          <v-btn light flat @click.native="register = false" v-if="register" key="button">Voltar</v-btn>
          <span v-else></span>
        </transition>
        <v-spacer></v-spacer>
        <v-btn light flat @click.native="visible = false">Prosseguir sem fazer login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import config from '../../config';

export default {
  data() {
    return {
      visible: !this.isLoggedIn,

      email: '',
      password: '',
      loginErrorMessage: '',
      showLoginTooltip: false,
      loginLoading: false,

      register: false,
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      registerLoading: false,
      registerSuccess: false,
      showSignUpTooltip: false,

      rules: {
        required(value) {
          return !!value || 'Campo obrigatório';
        },
        email(value) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
            'E-mail inválido';
        },
        password(value) {
          return value.length >= 6 || 'Sua senha deve ter pelo menos 6 caracteres';
        },
      },
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    invokeLoginTooltip(message, delay = 1500) {
      this.loginErrorMessage = message;
      this.showLoginTooltip = true;

      setTimeout(() => {
        this.showLoginTooltip = false;
      }, delay);
    },

    login() {
      if (!this.$refs.loginForm.validate()) {
        this.invokeLoginTooltip('Corrija os campos inválidos');
        return;
      }

      this.loginLoading = true;

      axios.post('/login', {
        email: this.email,
        password: this.password,
      }, config.axios.options)
        .then(({ data }) => data)
        .then((response) => {
          this.loginLoading = false;

          if (!response.token) {
            this.invokeLoginTooltip('E-mail ou senha inválidos');
            return;
          }

          setTimeout(() => {
            this.visible = false;
          }, 1500);
        })
        .catch(() => {
          this.loginLoading = false;
          this.invokeRegisterTooltip('Algo deu errado, tente novamente mais tarde', 3000);
        });
    },

    invokeRegisterTooltip(message, delay = 1500) {
      this.signUpErrorMessage = message;
      this.showSignUpTooltip = true;

      setTimeout(() => {
        this.showSignUpTooltip = false;
      }, delay);
    },

    submitRegister() {
      if (!this.$refs.signUpForm.validate()) {
        this.invokeRegisterTooltip('Corrija os campos inválidos');
        return;
      }

      this.registerLoading = true;

      axios.post('/users', {
        name: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword,
      }, config.axios.options)
        .then(({ data }) => data)
        .then((response) => {
          this.registerLoading = false;

          if (!response.token && response.errors.email) {
            this.invokeRegisterTooltip('E-mail já cadastrado');
            return;
          }

          this.registerSuccess = true;

          setTimeout(() => {
            this.visible = false;
          }, 1500);
        })
        .catch(() => {
          this.registerLoading = false;
          this.invokeRegisterTooltip('Algo deu errado, tente novamente mais tarde', 3000);
        });
    },
  },
  mounted() {
    axios.get('https://lighthouse-test-front-end.firebaseio.com/amount.json')
      .then(({ data }) => data)
      .then(response => console.log(response));
  },
};
</script>
