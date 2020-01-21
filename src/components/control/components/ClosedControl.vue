<template lang="pug">
    .closed-control(@click="$emit('open')")
        .number {{value}}
        button.open-button
</template>

<script>
    export default {
        name: "ClosedControl",

        props: {
            value: {type: Number, default: 0}
        }
    }
</script>

<style lang="sass" scoped>
    .closed-control
        display: flex
        align-items: center

    .open-button
        border: none
        height: 7px
        width: 7px
        background: #fff url("../../../assets/icons/arrow.svg") no-repeat center
        background-size: cover
        transform: rotate(90deg)
</style>