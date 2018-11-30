<template>
  <div id="app">
      <el-container class="layout-default">
          <el-header>
            <my-header/>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
      </el-container>
  </div>
</template>

<script>
import MyHeader from './components/header/index.vue';
export default {
  components: {
    MyHeader,
},
  methods: {
    
  }
}
</script>

<style>

</style>
