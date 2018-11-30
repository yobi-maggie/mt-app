<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list">
                <router-link class="my" to="/my">我的美团</router-link>
                <dl>
                    <dd>
                         <router-link to="/order">我的订单</router-link>
                    </dd>
                    <dd>
                         <router-link to="/order">我的收藏</router-link>
                    </dd>
                    <dd>
                         <router-link to="/order">抵用券</router-link>
                    </dd>
                    <dd>
                         <router-link to="/order">账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="list">
                 <router-link to="/router">首席APP</router-link>
            </li>
            <li class="list bd">
                 <router-link to="/center">商家中心</router-link>
                     <dl>
                    <dd>
                         <router-link to="/userCenter">登录商家中心</router-link>
                    </dd>
                    <dd>
                         <router-link to="coop">我想合作</router-link>
                    </dd>
                    <dd>
                         <router-link to="/wap">免费手机开店</router-link>
                    </dd>
                    <dd>
                         <router-link to="/kaipiao" >商家申请开票 </router-link>
                    </dd>
                </dl>
            </li>
            <li class="list site">
                <router-link to="/site">网站导航</router-link>
                <div class="subContainer">
                    <dl class="hotal">
                        <dt>酒店旅游</dt>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                    </dl>
                    <dl class="food">
                        <dt>吃美食</dt>
                        <dd>烧烤</dd>
                        <dd>烤鱼</dd>
                        <dd>烧烤</dd>
                        <dd>烤鱼</dd><dd>烧烤</dd>
                        <dd>烤鱼</dd><dd>烧烤</dd>
                        <dd>烤鱼</dd><dd>烧烤</dd>
                        <dd>烤鱼</dd><dd>烧烤</dd>
                        <dd>烤鱼</dd>
                    </dl>
                    <dl class="movie">
                        <dt>看电影</dt>
                        <dd>热映电影</dd>
                        <dd>热门影院</dd>
                        <dd>国内票房榜</dd>
                        <dd>热映电影</dd>
                        <dd>热门影院</dd>
                        <dd>国内票房榜</dd>
                        <dd>热映电影</dd>
                        <dd>热门影院</dd>
                        <dd>国内票房榜</dd>
                    </dl>
                    <dl class="app">
                        <dt>手机应用</dt>
                        <dd>
                            <a href="#">
                                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
                            </a>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default({
        
    })
</script>
