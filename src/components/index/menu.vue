<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index">
               <i :class="item.icon"/>{{item.name}}<span class="arrow"></span>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default({
        data() {
            return {
                menuList: [{
                    icon: "food",
                    name: "美食",
                    children: [{
                        title: '美食',
                        value: []
                    }]
                }, {
                    icon: "takeout",
                    name: "外卖"
                }, {
                    icon: "hotel",
                    name: "酒店"
                }, {
                    icon: "food",
                    name: "美食"
                }, {
                    icon: "takeout",
                    name: "外卖"
                }, {
                    icon: "hotel",
                    name: "酒店"
                }, {
                    icon: "food",
                    name: "美食"
                }, {
                    icon: "takeout",
                    name: "外卖"
                }, {
                    icon: "hotel",
                    name: "酒店"
                }]
            };
        }
    })
</script>
