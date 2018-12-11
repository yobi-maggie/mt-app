<template>
    <div class="m-istyle">
        <dl @mouseover="over">
            <dt>有格调</dt>
            <dd :class="{active:kind == 'all'}" data-type="all">全部</dd>
            <dd :class="{active:kind == 'food'}" data-type="food">约会聚餐</dd>
            <dd :class="{active:kind == 'spa'}" data-type="spa">丽人SPA</dd>
            <dd :class="{active:kind == 'movie'}" data-type="movie">电影演出</dd>
            <dd :class="{active:kind == 'travel'}" data-type="travel">品质出游</dd>
        </dl>
        <ul class="ibody">
            <li>
                <!-- <el-card :body-style="{ padding: '0px' }" shadow="never">
                    <img class="image" src="//p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&amp;&amp;r=2&amp;p=9&amp;x=2&amp;y=2&amp;relative=1&amp;o=20|460w_260h_1e_1c">
                    <ul class="cbody">
                        <li class="title">木北造型</li>
                        <li class="pos"><span>木北造型（崇文门新世界店）</span> </li>
                        <li class="price">￥<em>396</em><span>/人均</span></li>
                    </ul>
                </el-card> -->
                <el-card :body-style="{ padding: '0px' }" shadow="never" v-for="(item, index) in list[kind]" :key="index">
                    <img class="image" :src="item.image">
                    <ul class="cbody">
                        <li class="title">{{ item.title }}</li>
                        <li class="pos"><span>{{item.sub_title}}</span> </li>
                        <li class="price">￥<em>{{item.price}}</em><span>/人均</span></li>
                    </ul>
                </el-card>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default({
        data() {
            return {
                kind: 'all',
                list: {
                    all: [{
                        image: 'https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
                        title: '木北造型',
                        sub_title: '木北造型（崇文门新世界店）',
                        address: '崇文门新世界店',
                        price: 398,
                        type: 'spa',
                    }],
                    food: [],
                    spa: [],
                    movie: [],
                    travel: []
                }
            }
        },
        methods: {
            over(e) {
                console.log(e.target)
                let dom = e.target;
                let tagName = dom.tagName.toLowerCase();
                if (tagName != 'dd') {
                    return false;
                }
                this.kind = dom.getAttribute('data-type');
            }
        },
        mounted() {
            axios.get('/api/index/resultsByKeywords.json').then((res) => {
                console.log(res);
            });
        },
    })
</script>
<style lang="scss">
    @import "../../assets/css/index/artistic.scss";
</style>
