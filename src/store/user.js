export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
    updateLoggedIn(state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    logIn({commit}, payload) {
      const {userId, userPw} = payload
      if (userId && userPw) {
        commit('updateLoggedIn', true)
      }
    },
    logOut({commit}) {
      commit('updateLoggedIn', false)
    }
  }
}