<template>
  <div class="servers-list">
    <ServersListItem
      class="servers-list__item"
      v-for="(server, index) in servers"
      :server="server"
      :key="index"
    />
  </div>
</template>

<script>
  import ServersListItem from './ServersListItem'

  export default {
    name: 'ServersList',
    props: {
      servers: Array
    },
    components: {
      ServersListItem
    }
  }
</script>

<style lang="scss">
  .servers-list {

    &__item {
      &:not(:last-child) {
        margin-bottom: 16px;

        @include laptop {
          margin-bottom: 12px;
        }
      }
    }
  }
</style>
