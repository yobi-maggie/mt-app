<template>
    <div class="m-life">
        <div class=""></div>
        <el-row>
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
        </el-row>
        <el-row>
            <el-col :span="14">
                <slider />
            </el-col>
            <el-col :span="4">
                <div class="m-life-pic"></div>
            </el-col>
            <el-col :span="6">
                <div v-if="!$store.state.user.name" class="m-life-login">
                    <h4>
                        <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
                    </h4>
                    <p class="m-life-login-name">Hi！你好</p>
                    <p>
                        <router-link to="/register"><el-button round>注册</el-button></router-link>
                    </p>
                    <p>
                        <router-link to="/login"><el-button round>立即登录</el-button></router-link>
                    </p>
                </div>
                <div v-else class="m-life-login">
                    <h4>
                        <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
                    </h4>
                    <p class="m-life-login-name">{{$store.state.user.name}}</p>
                    <div class="item">
                        <div class="fn-item">
                            <a href="https://www.meituan.com/vouchers/" target="_blank">
                                <div class="icon">
                                    <i class="iconfont el-icon-tickets"></i>
                                </div>
                                <p class="fn-name">我的订单</p>
                            </a>
                        </div>
                        <div class="fn-item">
                            <a href="https://www.meituan.com/vouchers/" target="_blank">
                                <div class="icon">
                                    <i class="iconfont el-icon-star-on"></i>
                                </div>
                                <p class="fn-name">我的收藏</p>
                            </a>
                        </div>
                        <div class="fn-item">
                            <a href="https://www.meituan.com/vouchers/" target="_blank">
                                <div class="icon">
                                    <i class="iconfont el-icon-star-on"></i>
                                </div>
                                <p class="fn-name">抵用券</p>
                            </a>
                        </div>
                        <div class="fn-item">
                            <a href="https://www.meituan.com/vouchers/" target="_blank">
                                <div class="icon">
                                    <i class="iconfont el-icon-goods"></i>
                                </div>
                                <p class="fn-name">余额</p>
                            </a>
                        </div>
                        <div class="fn-item">
                            <a href="https://www.meituan.com/vouchers/" target="_blank">
                                <div class="icon">
                                    <i class="iconfont el-icon-more"></i>
                                </div>
                                <p class="fn-name">更多</p>
                            </a>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="m-life-hotel"/>
            </el-col>
            <el-col :span="7">
                <div class="m-life-music"/>
            </el-col>
            <el-col :span="4">
                <div class="m-life-coop"/>
            </el-col>
            <el-col :span="6">
                <div class="m-life-downapp">
                    <img 
                        src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" 
                        alt="下载APP">
                    <p>美团APP手机版</p>
                    <h4><span class="red">1元起</span><em class="gary">吃喝玩乐</em></h4>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Slider from './slider.vue';
    export default({
        data() {
            return {

            }
        },
        components: {
            Slider,
        }
    })
</script>
<style lang="scss">
    @import "../../assets/css/index/life.scss";
</style>
