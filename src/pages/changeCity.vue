<template>
    <div class="page-changeCity">
        <el-row>
            <el-col :span="24">
                <m-select />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <hot title="热门城市" :list="hotCity"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <hot title="最近访问" :list="recentsCity" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <categroy/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import MSelect from '../components/changeCity/select.vue';
    import hot from '../components/changeCity/hot.vue';
    import Categroy from '../components/changeCity/category.vue';
    export default {
        data() {
            return {
                hotCity: this.$store.state.hotPlace,
                recentsCity: [{
                    "id": 20,
                    "name": "广州",
                    "pinyin": "guangzhou",
                    "acronym": "gz",
                    "rank": "S",
                    "firstChar": "g"
                },
                {
                    "id": 30,
                    "name": "深圳",
                    "pinyin": "shenzheng",
                    "acronym": "sz",
                    "rank": "S",
                    "firstChar": "s"
                }],
            }
        },
        components: {
            MSelect,
            hot,
            Categroy,
        }
    }
</script>
