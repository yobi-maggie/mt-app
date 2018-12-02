<template>
    <el-container class="layout-default">
        <el-header height="">
            <my-header/>
        </el-header>
        <el-main>
            <router-view name="main"></router-view>
        </el-main>
        <el-footer height="">
            <my-footer />
        </el-footer>
    </el-container>
</template>
<script>
    import MyHeader from '../components/header/index.vue';
    import MyFooter from '../components/footer/footer.vue';
    export default {
    components: {
        MyHeader,
        MyFooter
    },
    methods: {
        
    }
    }
</script>

<style>

</style>
