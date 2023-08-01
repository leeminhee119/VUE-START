<template>
  <h1>설문조사</h1>
  <TextField 
    v-model="fields[0].value"
    :title="fields[0].title" />
  <SimpleRadio
    v-model="fields[1].value"
    :title="fields[1].title"
    :items="fields[1].items" />
  <h1>결과</h1>
  <div
    v-for="field in fields"
    :key="field.title">
    {{ field.value }}
  </div>
</template>

<script>
import TextField from '~/components/TextField'
import SimpleRadio from '~/components/SimpleRadio'

export default {
    components: {
      TextField, 
      SimpleRadio,
    },
    data() {
      return {
        fields: [
          {
            component: 'TextField',
            title: '이름',
            value: '',
          },
          {
            component: 'SimpleRadio',
            title: '나이대',
            value: '',
            items: ['20대', '30대', '40대', '50대']
          }
        ]
      }
    }
}
</script>
