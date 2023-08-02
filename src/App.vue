<template>
  <Modal
    v-model="isShow"
    width="500px">
    <template #activator>
      <button>Open Modal!</button>
    </template>
    <h3>모달 내용입니다.</h3>
    <textarea
      ref="textarea"
      :value="msg"></textarea>
    <button @click="submit">
      출력
    </button>
  </Modal>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Please type in any text here',
      isShow: false,
    }
  },
  watch: {
    isShow(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.textarea.focus()
        })
      }
    }
  },
  methods: {
    submit() {
      console.log(this.msg)
    }
  }
}
</script>

<style>
  textarea {
    width: 80%;
    min-height: 100px;
    outline: none;
  }
</style>