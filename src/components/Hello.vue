<template>
  <Modal v-model="isOpen">
    <template #activator>
      <h1>Hello</h1>
    </template>
    <h3>Boo!</h3>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped lang="scss">
$color: orchid;
h1 {
  color: $color;
}
</style>
