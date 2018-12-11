<template>
    <div class="page-register">
        <div class="header">
            <header>
                <a class="site-logo" href="http://www.meituan.com">美团</a>
                <div class="login">
                    <span class="bold">已有美团账号？</span>
                    <router-link :to="{name: 'login'}">
                          <el-button
                        type="primary"
                        size="small">登录</el-button>
                    </router-link>
                </div>
            </header>
        </div>
        <section>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="mini" round @click="sendMessage">发送验证码</el-button>
                </el-form-item>
                <el-form-item label="短信动态码" prop="code">
                    <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="ruleForm.pwd" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="cpwd">
                    <el-input v-model="ruleForm.cpwd" type="password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submit('ruleForm')">同意以下协议并注册</el-button>
                    <a
                        class="f1"
                        href="http://www.meituan.com/about/terms"
                        target="_blank">《美团网用户协议》</a>
                </el-form-item>
            </el-form>
        </section>
        <footer>
            <p>©meituan.com  京ICP证070791号  京公网安备11010502025545号</p>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rules: {
                    phone: [{
                        required: true,
                        type: 'string',
                        message: '请输入手机号',
                        trigger: 'blur',
                    }],
                    code: [{
                        required: true,
                        type: 'string',
                        message: '请输入验证码',
                        trigger: 'blur',
                    }],
                    pwd: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur',
                    }],
                    cpwd: [{
                        required: true,
                        message: '确认密码',
                        trigger: 'blur'
                    }, {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请确认密码'));
                            } else if (value !== this.ruleForm.pwd) {
                                callback(new Error('两次输入密码不一致'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur'
                    }]
                },
                ruleForm: {
                    phone: '',
                    code:'',
                    pwd: '',
                    cpwd: '',
                }
            }
        },
        methods: {
            submit() {
                this.$refs['ruleForm'].validate((valid) => {
                    if (!valid) {
                        return false;
                    }
                })
            },
            sendMessage() {
                console.log('sendmessage')
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/css/register/index.scss";
</style>
