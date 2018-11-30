import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import App from './App.vue'
import router from './router';

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
