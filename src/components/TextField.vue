<template>
  <h3>{{ title }}</h3>
  <input 
    :value="modelValue"
    type="text"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue']
}
</script>