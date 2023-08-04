<template>
  <RouterLink to="/about">
    Go to About
  </RouterLink>
  <button
    v-if="!isLoggedIn"
    @click="logIn">
    로그인
  </button>
  <button
    v-else
    @click="logOut">
    로그아웃
  </button>
  <RouterView />
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn
    }
  },
  created() {
    this.$store.dispatch('user/initialize')
  },
  methods: {
    logIn() {
      this.$router.push('/logIn')
    },
    logOut() {
      this.$store.dispatch('user/logOut')
    },
  }
}
</script>
