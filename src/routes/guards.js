import router from './index'
import store from '~/store'

router.beforeEach(to => {
  if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
    // Redirect to LogIn page
    return {
      path: '/logIn',
      query: { redirect: to.fullPath }
    }
  }
})