<template lang="pug">
  #app
    h1 Тестовое задание для ПАРИТЕТ РДЦ.
    .container
        control(
            :open="focusedControl === 1"
            :value="control1value"
            :command="{title: 'Сумма', callback: sumCommand}"
            @focus="focusedControl = 1"
            @focus-next="changeFocus"
            @focus-previous="changeFocus"
        )

        control(
            :open="focusedControl === 2"
            :value="control2value"
            :command="{title: 'Константа', callback: constantCommand}"
            @focus="focusedControl = 2"
            @focus-next="changeFocus"
            @focus-previous="changeFocus"
            @change="$store.commit('setControl3Value', $event)"
        )

        control(
            :open="focusedControl === 3"
            :value="control3value"
            @focus="focusedControl = 3"
            @focus-next="changeFocus"
            @focus-previous="changeFocus"
            @change="$store.commit('setControl2Value', $event)"
        )
</template>

<script>
    import { mapState } from 'vuex';
    import Control from "./components/control/Control";

    export default {
        name: 'app',

        components: {Control},

        data() {
            return {
                focusedControl: 0
            }
        },

        computed: {
            ...mapState(['control1value', 'control2value', 'control3value'])
        },

        methods: {
            changeFocus() {
                this.focusedControl = this.focusedControl < 3 ? this.focusedControl + 1 : 1;
            },
            constantCommand(context) {
                context.$store.commit('setControl2Value', 1000);
                context.currentValue = 1000;
            },
            sumCommand(context) {
                const sum = context.$store.state.control2value + context.$store.state.control3value;
                console.log(context.$store.state.control2value);
                context.$store.commit('setControl1Value', sum);
                context.currentValue = sum;
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
