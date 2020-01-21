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
    html, body, #app
        height: 100%

    .container
        width: 300px
        margin: 0 auto
</style>
