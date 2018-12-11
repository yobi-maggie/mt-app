<template>
    <div class="m-geo">
        <i class="el-icon-location"></i>
        {{$store.state.position.name}}
        <router-link :to="{name: 'changeCity'}">切换城市</router-link>[哈尔滨 大庆 牡丹江]
    </div>
</template> 
<script>
    export default ({
        data() {
            return {}
        }
    })
</script>