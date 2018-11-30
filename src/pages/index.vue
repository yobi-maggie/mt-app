<template>
    <div class="page-index">
        <el-row>
            <el-col :span="4">
                <m-menu></m-menu>
            </el-col>
            <el-col :span="18">
                life
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">pic</el-col>
        </el-row>
    </div>
</template>
<script>
    import MMenu from '../components/index/menu.vue'
    export default({
        components: {
            MMenu,
        }
    })
</script>
<style lang="scss">
    @import '../assets/css/index/index.scss';
</style>


