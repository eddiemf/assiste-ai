<template>
  <div class="home-page">
    <v-container>
      <button @click="addMovie('movieeee')">adicionar</button>
      <v-flex md2 v-for="(movie, index) in movies" :key="index">
        {{ movie }}
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'movies',
    ]),
  },
  methods: {
    ...mapActions([
      'addMovie',
    ]),
  },
};
</script>
