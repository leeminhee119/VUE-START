<template>
  <form @submit.prevent>
    <input
      v-model="userID"
      placeholder="YOUR ID"
      type="text" />
    <input
      v-model="userPW"
      placeholder="YOUR PW"
      type="password" />
    <button @click="logIn">
      Log In
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
      userPW: ''
    }
  }
}
</script>