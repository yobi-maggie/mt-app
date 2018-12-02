<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <h4 v-if="error" class="tips"><i/>{{ error }}</h4>
                <p><span>账号登录</span></p>
                <el-input v-model="username" placeholder="手机号/用户名/邮箱" prefix-icon="profile"/>
                <el-input v-model="password" placeholder="密码" prefix-icon="password" type="password"/>
                <div class="foot">
                    <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
                    <b>忘记密码？</b>
                </div>
                <el-button class="btn-login" type="success" size="mini" @click="login">登录</el-button> 
                <p class="reg">还没有账号？
                    <a href="#">免费注册</a>
                </p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
                        <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
                    </div>
                </div>
            </div>
             
        </div>
        <footer>
            <ul>
                <li><a href="#" class="first">关于美团</a> </li>
                <li><a href="#">加入我们</a> </li>
                <li><a href="#">商家入驻</a> </li>
                <li><a href="#">帮助中心</a> </li>
                <li><a href="#">美团手机版</a> </li>
            </ul>
            <p>©meituan.com  京ICP证070791号  京公网安备11010502025545号</p>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                error: '',
                checked: false,
            }
        },
        methods: {
            login() {
            
            },
            sendMessage() {
                console.log('sendmessage')
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/css/login/index.scss";
</style>
