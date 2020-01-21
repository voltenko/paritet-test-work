<template lang="pug">
  #app
    h1 Тестовое задание для ПАРИТЕТ РДЦ.
    .container
        control
</template>

<script>
    import Control from "./components/control/Control";

    export default {
      name: 'app',
      components: {Control},
    }
</script>

<style lang="sass">
    .container
        width: 100px
        margin: 0 auto
</style>
