<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="item in list" :key="item">
                <a :href="'/default/changeCity#city-'+item">{{ item }}</a>
                <!-- <router-link :to="{path: '/default/changeCity#city-' + item }">{{item}}</router-link> -->
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="item in block" :key="item.title">
            <dt :id="'city-'+item.title">{{item.title}}</dt>
            <dd>
                <span v-for="(value) in item.city" :key="value.name" @click="changeCity(value)">{{value.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default ({
        data() {
            return {
                list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                cityList: [{
                    "id": 1,
                    "name": "北京",
                    "pinyin": "beijing",
                    "acronym": "bj",
                    "rank": "S",
                    "firstChar": "b"
                    },
                    {
                        "id": 10,
                        "name": "上海",
                        "pinyin": "shanghai",
                        "acronym": "sh",
                        "rank": "S",
                        "firstChar": "s"
                    },
                    {
                        "id": 20,
                        "name": "广州",
                        "pinyin": "guangzhou",
                        "acronym": "gz",
                        "rank": "S",
                        "firstChar": "g"
                    },
                    {
                        "id": 30,
                        "name": "深圳",
                        "pinyin": "shenzheng",
                        "acronym": "sz",
                        "rank": "S",
                        "firstChar": "s"
                    },
                    {
                        "id": 40,
                        "name": "天津",
                        "pinyin": "tianjin",
                        "acronym": "tj",
                        "rank": "A",
                        "firstChar": "t"
                    },
                    {
                        "id": 42,
                        "name": "西安",
                        "pinyin": "xian",
                        "acronym": "xa",
                        "rank": "A",
                        "firstChar": "x"
                    },
                    {
                        "id": 45,
                        "name": "重庆",
                        "pinyin": "chongqing",
                        "acronym": "cq",
                        "rank": "A",
                        "firstChar": "c"
                    },
                    {
                        "id": 50,
                        "name": "杭州",
                        "pinyin": "hangzhou",
                        "acronym": "hz",
                        "rank": "A",
                        "firstChar": "h"
                    },
                    {
                        "id": 55,
                        "name": "南京",
                        "pinyin": "nanjing",
                        "acronym": "nj",
                        "rank": "A",
                        "firstChar": "n"
                    },
                    {
                        "id": 57,
                        "name": "武汉",
                        "pinyin": "wuhan",
                        "acronym": "wh",
                        "rank": "A",
                        "firstChar": "w"
                    },
                    {
                        "id": 59,
                        "name": "成都",
                        "pinyin": "chengdu",
                        "acronym": "cd",
                        "rank": "A",
                        "firstChar": "c"
                }],
                block: []
            }
        },
        methods: {
            changeCity(city) {
                // console.log(this.$store);
                this.$store.commit('setPosition', city);
            }
        },
        mounted() {
            // 开头字母对应的城市
            var pObj = {};
            var block = [];
            this.cityList.forEach((item, index) => {
                if (!pObj[item.firstChar]) {
                    pObj[item.firstChar] = [];
                }
                pObj[item.firstChar].push(item);
            });
            for (let prop in pObj) {
                block.push({
                    title: prop.toUpperCase(),
                    city: pObj[prop]
                });
            }
            this.block = block;
        }
    })
</script>

<style lang="scss">
  @import "../../assets/css/changeCity/categroy.scss";
</style>
