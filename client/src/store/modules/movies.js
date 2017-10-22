const getters = {
  movies(state) {
    return state.movies;
  },
};

const mutations = {
  addMovie(state, payload) {
    state.movies.push(payload);
  },
};

const actions = {
  addMovie({ commit }, payload) {
    commit('addMovie', payload);
  },
};

const state = {
  movies: [],
};

export {
  state,
  getters,
  mutations,
  actions,
};
