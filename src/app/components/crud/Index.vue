<template>
  <app-card v-bind="{label: $route.meta.label, icon: $route.meta.icon, header: true, style: styles}">
    <router-view slot="content"></router-view>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'genesis/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'crud-index',
    props: {
      label: {
        default: ''
      },
      icon: {
        default: 'home'
      },
      classes: {
        default: () => ({})
      },
      styles: {
        default: () => ({})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
