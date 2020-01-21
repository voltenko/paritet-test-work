<template lang="pug">
    .control
        closed-control(
            v-if="!isOpen"
            @open="isOpen = true"
        )

        opened-control(
            v-else
        )

    
</template>

<script>
    import ClosedControl from "./components/ClosedControl";
    import OpenedControl from "./components/OpenedControl";

    export default {
        name: "Control",

        components: {ClosedControl, OpenedControl},

        data() {
            return {
                isOpen: false,
            }
        },

        props: {
            open: {type: Boolean, default: false},
        },

        methods: {

        }
    }
</script>

<style lang="sass" scoped>
    .control


</style>