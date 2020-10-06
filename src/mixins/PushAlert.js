export const pushAlert = {
    methods: {
        pushAlert(message, type) {
            this.$root.$emit('pushAlert', message, type);
        }
    }
}
