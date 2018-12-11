<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col class="left" :span="3">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col class="center" :span="15">
                <div class="wrapper">
                    <el-input placeholder="搜索商家或地点" v-model="searchWord" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl v-if="isHotPlace" class="hotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="index">
                            <!-- <a :href="'/default/s/' + item">{{ item }}</a> -->
                            <router-link :to="{name: 'goods', params: {id: item}}">{{item}}</router-link>
                        </dd>
                       
                    </dl>
                    <dl v-if="isSearchList" class="searchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {id: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#">故宫博物院</a>
                    <a href="#">颐和园</a>
                     <a href="#">故宫博物院</a>
                    <a href="#">颐和园</a>
                     <a href="#">故宫博物院</a>
                    <a href="#">颐和园</a>
                </p>
            </el-col>
            <!-- <el-col class="right" :span="6">

            </el-col> -->
        </el-row>
    </div>
</template>
<script>
    export default({
        data() {
            return {
                isFocus: false,
                hotPlaceList: ['火锅', '烤肉', '烧烤', '西餐'],
                searchList: ['老北京涮肉', '爱尚火锅', '风味麻辣烫'],
            }
        },
        computed: {
            isHotPlace() {
                return this.isFocus && !this.searchWord;
            },
            isSearchList() {
                return this.isFocus && this.searchWord;
            },
            searchWord: {
                get() {
                    return  this.$store.state.goodKey;
                },
                set(val) {
                    console.log(val);
                    this.$store.commit('setSearchGood', val);
                }
            }
        },
        methods: {
            focus() {
                this.isFocus = true;
            },
            blur() {
                var self = this;
                setTimeout(function () {
                    self.isFocus = false;
                }, 200);
            },
            input(e) {
                console.log(this.searchWord, e);
            }
        }
    })
</script>