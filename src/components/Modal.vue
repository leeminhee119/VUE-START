<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  
  <template v-if="modelValue">
    <div
      class="modal"
      @click="offModal">
      <div
        class="modal__inner"
        :style="{ width: `${parseInt(width)}px` }"
        @click.stop>
        <button @click="offModal">
          x
        </button>
        <slot></slot>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 400
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isOpen: this.modelValue,
    }
  },
  methods: {
    onModal() {
      this.$emit('update:modelValue', true)
    },
    offModal() {
      this.$emit('update:modelValue', false)
    },
  },
}
</script>

<style>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    background-color: #fff;
    padding: 20px;
    button {
      float: right;
    }
  }
}
</style>