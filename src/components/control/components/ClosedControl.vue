<template lang="pug">
    .closed-control
        .number {{handledValue}}
        button.open-button(@click="$emit('open')")
</template>

<script>
    export default {
        name: "ClosedControl",

        props: {
            value: {type: Number, default: 0}
        },

        computed: {
            handledValue() {
                return String(this.value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            }
        }
    }
</script>

<style lang="sass" scoped>
    .closed-control
        display: flex
        align-items: center

    .number
        padding: 5px 0 0 3px
        font-size: 14px

    .open-button
        border: none
        height: 7px
        width: 7px
        background: #fff url("../../../assets/icons/arrow.svg") no-repeat center
        background-size: cover
        transform: rotate(90deg)
        cursor: pointer
        &:focus
            outline: none
</style>