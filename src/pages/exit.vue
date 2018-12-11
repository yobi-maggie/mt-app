<template>
    <div class="exit"></div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {
            this.$store.commit('setUser', '');
            console.log('exity')
            this.$router.replace({path: '/'})
        }
    }
</script>
