<template lang="pug">
    .control(v-click-outside="close")
        closed-control(
            v-if="!isOpen"
            @open="isOpen = true"
            :value="currentValue"
        )

        opened-control(
            v-else
            @save="save($event)"
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
                currentValue: 0
            }
        },

        props: {
            open: {type: Boolean, default: false},
            value: {type: Number, default: 0}
        },

        watch: {
            value(val) {
                this.currentValue = val;
            },
        },

        methods: {
            close() {
                this.isOpen = false;
            },
            save(event) {
                this.currentValue = event;
                this.close();
            }
        },

        mounted() {
            this.currentValue = this.value;
        },
    }
</script>

<style lang="sass" scoped>
</style>