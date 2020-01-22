<template lang="pug">
  #app
    h1 Тестовое задание для ПАРИТЕТ РДЦ.
    .container
        control(
            v-for="n in 3"
            :key="n"
            :open="focusedControl === n"
            @focus="focusedControl = n"
            @focus-next="changeFocus"
            @focus-previous="changeFocus"
        )
</template>

<script>
    import Control from "./components/control/Control";

    export default {
        name: 'app',

        components: {Control},

        data() {
            return {
                focusedControl: 0
            }
        },

        methods: {
            changeFocus() {
                this.focusedControl = this.focusedControl < 3 ? this.focusedControl + 1 : 1;
            },
        }
    }
</script>

<style lang="sass">
    html, body, #app
        height: 100%

    .container
        width: 300px
        margin: 0 auto
</style>
