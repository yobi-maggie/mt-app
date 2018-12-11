<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="mouseLeave">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="mouseEnter(item)">
               <i :class="item.icon"/>{{item.name}}<span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="curDetail && curDetail.length" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail">
                <h4 :key="index"> {{ item.title }} </h4>
                <span v-for="(value) in item.children" :key="value">{{ value }}</span>
            </template>
        </div>
    </div>
</template>
<script>
    export default({
        data() {
            return {
                curDetail: [],
                menuList: [{
                    icon: "food",
                    name: "美食",
                    children: [{
                        title: '美食',
                        children: ["代金券","甜点饮品","火锅","自助餐","小吃快餐"]
                    }]
                }, {
                    icon: "takeout",
                    name: "外卖",
                    "children":[{
                        "title":"外卖",
                        "children":["美团外卖"]
                    }]
                }, {
                    icon: "hotel",
                    name: "酒店",
                    children:[{
                        title:'酒店星级',
                        children:['经济型','舒适/三星','高档/四星','豪华/五星']
                    }]
                }, {
                    icon: "hotel",
                    name: "酒店",
                    children:[{
                        title:'酒店星级',
                        children:['经济型','舒适/三星','高档/四星','豪华/五星']
                    }]
                }, {
                    icon: "hotel",
                    name: "酒店",
                    children:[{
                        title:'酒店星级',
                        children:['经济型','舒适/三星','高档/四星','豪华/五星']
                    }]
                }, {
                    icon: "hotel",
                    name: "酒店",
                    children:[{
                        title:'酒店星级',
                        children:['经济型','舒适/三星','高档/四星','豪华/五星']
                    }]
                }, {
                    icon: "hotel",
                    name: "酒店",
                    children:[{
                        title:'酒店星级',
                        children:['经济型','舒适/三星','高档/四星','豪华/五星']
                    }]
                }]
            };
        },
        methods: {
            mouseEnter(item) {
                this.curDetail = item.children;
            },
            mouseLeave(item) {
                var self = this;
                this.timer = setTimeout(function() {
                    self.curDetail = null;
                }, 150);
                
            },
            detailEnter() {
                clearTimeout(this.timer);
            },
            detailLeave() {
                this.curDetail = null;
            }
        }
    })
</script>
