<template>
  <RouterLink to="/about">
    Go to About
  </RouterLink>
  <button @click="logIn">
    로그인
  </button>
  <button @click="logOut">
    로그아웃
  </button>
  <RouterView />
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$router.push('/logIn')
    },
    logOut() {
    },
  }
}
</script>
