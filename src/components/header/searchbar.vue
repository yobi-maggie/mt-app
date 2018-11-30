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
                            <a href="#">{{ item }}</a>
                        </dd>
                       
                    </dl>
                    <dl v-if="isSearchList" class="searchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <a href="#">{{ item }}</a>
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
                <ul class="nav">
                    <li>
                        <router-link to="/" class="takeout">美团外卖</router-link>
                    </li>
                        <li>
                        <router-link to="/" class="movie">猫眼电影</router-link>
                    </li>
                        <li>
                        <router-link to="/" class="hotal">美团酒店</router-link>
                    </li>
                        <li>
                        <router-link to="/" class="apartment">民宿/公寓</router-link>
                    </li>
                    <li>
                        <router-link to="/" class="business">商家入驻</router-link>
                    </li>
                    <li>
                        <router-link to="/" class="">美团公益</router-link>
                    </li>
                </ul>
               
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
                searchWord: '',
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