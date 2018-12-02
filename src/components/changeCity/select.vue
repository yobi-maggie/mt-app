<template>
    <div class="m-iselect">
        
        <span class="name">按省份选择:</span>
        <el-select v-model="pvalue" placeholder="省份">
            <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <el-select :disabled="!city.length" v-model="cvalue" placeholder="城市">
            <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <span class="name search">直接搜索:</span>
        <el-autocomplete v-model="word" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                province:[],
                pvalue: '',
                city: [],
                cvalue: '',
                word: '',
            }
        },
        methods: {
            querySearchAsync() {

            },
            handleSelect() {

            }
        }
    }
</script>
<style lang="scss">
  @import "../../assets/css/changeCity/iselect.scss";
</style>