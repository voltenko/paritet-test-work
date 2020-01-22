<template lang="pug">
    .control(
        v-click-outside="close"
        @keydown.esc="close"
        @keydown.tab.prevent="$emit('focus-next')"
        @keydown.shift.tab.prevent="$emit('focus-previous')"
    )
        closed-control(
            v-if="!isOpen"
            @open="isOpen = true"
            :value="currentValue"
        )

        opened-control(
            v-else
            @focus="$emit('focus')"
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
            value: {type: Number, default: 0},
        },

        watch: {
            value(val) {
                this.currentValue = val;
            },

            open(val) {
                this.isOpen = val;
            },
        },

        methods: {
            close() {
                this.isOpen = false;
            },
            save(event) {
                this.currentValue = event;
                this.close();
            },
        },

        mounted() {
            this.currentValue = this.value;
            this.isOpen = this.open;
        },
    }
</script>

<style lang="sass" scoped>

</style>