<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}:</dt>
            <dd v-for="(item, index) in list" :key="index">
                {{item.name}}
            </dd>
        </dl>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        props: ['title', 'list'],
        data() {
            return {
                
            }
        },
        mounted() {
            // axios.get('/api/city/hot.json').then((res) => {
            //     console.log(res);
            // });
        }
    }
</script>
<style lang="scss">
  @import "../../assets/css/changeCity/hot.scss";
</style>