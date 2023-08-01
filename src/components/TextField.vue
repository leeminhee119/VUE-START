<template>
  <h3>{{ title }}</h3>
  <!--eslint-disable-->
  <input 
    :value="modelValue"
    type="text"
    @input="$emit('update:modelValue', $event.target.value)" />
    <!--eslint-enable-->
</template>

<script>
import mixin from './mixin'
export default {
    mixins: [mixin]
}
</script>