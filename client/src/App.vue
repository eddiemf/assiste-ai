<template>
  <v-app dark>
    <v-container>
      <TheHeader></TheHeader>
      <HomePage></HomePage>
      <router-view></router-view>
      <TheLoginDialog />
    </v-container>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheLoginDialog from './components/TheLoginDialog';
import HomePage from './views/HomePage';

export default {
  components: {
    TheHeader,
    HomePage,
    TheLoginDialog,
  },
  data() {
    return {
    };
  },
};
</script>
