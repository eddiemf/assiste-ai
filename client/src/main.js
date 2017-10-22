import Vue from 'vue';
import Vuetify from 'vuetify';
import './stylus/main.styl';
import './scss/app.scss';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
