<template>
    <div class="m-user">
        <template v-if="user">
            欢迎您, <span class="username">{{user}}</span>
            [<router-link :to="{name: 'exit'}">退出登录</router-link>]
        </template>
        <template v-else>
            <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
            <router-link :to="{name: 'register'}" class="register">注册</router-link>
        </template>
    </div>
</template>
<script>
    export default({
        data() {
            return {
                user: this.$store.state.user.name,
            }
        }
    })
</script>