<template lang="pug">
  #app
    h1 Тестовое задание для ПАРИТЕТ РДЦ.
    .container
        control(
            :open="focusedControl === 1"
            @focus="focusedControl = 1"
            @focus-next="changeFocus"
            @focus-previous="changeFocus"
        )

        control(
            :open="focusedControl === 2"
            :command="{title: 'Константа', callback: () => {}}"
            @focus="focusedControl = 2"
            @focus-next="changeFocus"
            @focus-previous="changeFocus"
        )

        control(
            :open="focusedControl === 3"
            @focus="focusedControl = 3"
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
