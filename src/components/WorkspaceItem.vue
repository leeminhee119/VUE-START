<template>
  <li>
    <div 
      :style="{ paddingLeft: `${14}px`}"
      class="title">
      <span class="material-icons">
        play_arrow
      </span>
      <span class="text">
        {{ workspace.title }}
      </span>
      <div class="actions">
        <span class="material-icons">
          add
        </span>
        <span class="material-icons">
          delete
        </span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    workspace: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  .title {
    &:hover {
      background-color: $color-background--hover1;
    }
    .text {

    }
    .actions {

    }
    .material-icons {

    }
  }
}
</style>