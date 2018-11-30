<template>
    <el-row class="m-header">
        <el-col :span="6">
            <geo />
        </el-col>
        <el-col :span="4">
            <user />
        </el-col>
        <el-col :span="14">
            <m-nav />
        </el-col>
    </el-row>
</template>
<script>
    import geo from './geo.vue';
    import user from './user.vue';
    import mNav from './nav.vue';
    export default({
        components: {
            geo,
            user,
            mNav,
        }
    })
</script>
<style lang="scss">
    @import "../../assets/css/public/layout.scss";
    @import "../../assets/css/public/header/index.scss";
</style>

