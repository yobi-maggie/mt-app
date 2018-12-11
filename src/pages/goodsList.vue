<template>
    <div class="page-product">
        <el-row>
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                left
            </el-col>
            <el-col :span="5">
                right
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import crumbs from '../components/goods/crumbs.vue';;
    export default {
        components: {
            crumbs
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/products/index.scss"
</style>
