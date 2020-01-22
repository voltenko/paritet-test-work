<template lang="pug">
    .open-control
        input.input(
            ref="input"
            v-model="currentValue"
            @keydown.enter="save"
            @keydown.tab="save"
            @focus="$emit('focus')"
        )
        .buttons
            button.button.increment-button(@click="increment")
            button.button.decrement-button(@click="decrement")
</template>

<script>
    export default {
        name: "OpenedControl",

        data() {
            return {
                currentValue: 0
            }
        },

        props: {
            value: {type: Number, default: 0}
        },

        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(newVal, oldVal) {
                if (/\D/.test(newVal)) this.currentValue = oldVal;
            }
        },

        mounted() {
            this.$refs.input.focus();
            this.currentValue = this.value;
        },

        methods: {
            increment() {
                this.$refs.input.focus();
                this.currentValue++;
            },
            decrement() {
                this.$refs.input.focus();
                this.currentValue--;
            },
            save() {
                this.$emit('save', +this.currentValue);
            }
        },
    }
</script>

<style lang="sass" scoped>
    .open-control
        padding: 3px
        width: 150px
        display: flex
        align-items: center
        border: 1px solid black

    .input
        width: 140px
        height: 10px
        border: none
        outline: none
        margin-top: 2px
        font-size: 13px

    .buttons
        display: flex
        flex-direction: column

    .button
        border: none
        height: 7px
        width: 7px
        background: #fff url("../../../assets/icons/arrow.svg") no-repeat
        background-size: 7px
        padding: 0
        margin-left: 2px
        cursor: pointer

        &:focus
            outline: none

    .increment-button
        transform: rotate(-90deg)

    .decrement-button
        margin-top: 2px
        transform: rotate(90deg)

</style>