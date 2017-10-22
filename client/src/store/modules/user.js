const getters = {
  isLoggedIn(state) {
    return !!state.user;
  },
  user(state) {
    return state.user;
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload);
  },
};

const state = {
  user: {},
  isLoggedIn: false,
};

export {
  state,
  getters,
  mutations,
  actions,
};
