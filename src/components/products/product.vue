<template>
  <dl class="s-item">
    <dt>
      <img
        :src="meta.image"
        alt="商品图片">
    </dt>
    <dd>
      <h3><router-link :to="{path:'detail',query:{keyword:meta.name,type:meta.type}}">{{ meta.name }}</router-link></h3>
      <el-rate
        v-model="meta.score"
        :colors="['#ff9900', '#ff9900', '#FF9900']"
        disabled/>
      <span
        v-if="meta.score>4"
        class="s-item-comment">很好</span><span
          v-else-if="meta.score>3"
          class="s-item-comment">一般</span><span
            v-else
            class="s-item-comment">很差</span>
      <span class="s-item-value">{{ meta.score }}分</span>
      <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
      <p>
        <span class="s-item-type"></span>
        <span class="s-item-addr">{{ meta.address }}</span>
      </p>
      <p>
        <em class="s-item-price">￥{{ meta.avg_price }}/人</em>
      </p>
      <ul>
        <li v-for="(item, index) in meta.deal_items" :key="index"></li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
