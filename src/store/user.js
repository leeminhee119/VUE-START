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

        const {redirect} = router.currentRoute.value.query // router 객체를 통해서도 currentRoute.value를 통해 route정보를 가져올 수 있다.
        if (redirect) {
          router.push(redirect)
        } else {
          router.push('/')
        }
      }
    },
    logOut({commit}) {
      commit('updateLoggedIn', false)
      
      // 현재 페이지가 로그인이 필요한 페이지면, 홈으로 리다이렉트시킨다.
      const {requiresAuth} = router.currentRoute.value.meta // 설정 안 해준 라우트는 undefined
      if (requiresAuth) {
        router.push('/')
      }
    }
  }
}