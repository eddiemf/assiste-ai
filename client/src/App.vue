<template>
  <v-app dark>
    <v-container>
      <TheHeader />
      <router-view></router-view>
    </v-container>
    <TheAuthDialog />
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheAuthDialog from './components/TheAuthDialog';
import HomePage from './views/HomePage';

export default {
  components: {
    TheHeader,
    HomePage,
    TheAuthDialog,
  },
  data() {
    return {
    };
  },
};
</script>
