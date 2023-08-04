import router from '~/routes'

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

        const redirect = router.currentRoute.value.query.redirect // router 객체를 통해서도 currentRoute.value를 통해 route정보를 가져올 수 있다.
        if (redirect) {
          router.push(redirect)
        } else {
          router.push('/')
        }
      }
    },
    logOut({commit}) {
      commit('updateLoggedIn', false)
    }
  }
}