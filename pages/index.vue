<template>
  <div>
    <PromoBlock />
    <Servers />
  </div>
</template>

<script>
  import Servers from '~/components/Servers'
  import PromoBlock from '~/components/PromoBlock'

  export default {
    name: 'IndexPage',
    components: {
      PromoBlock,
      Servers
    }
  }
</script>
