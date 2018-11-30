import Vue from 'vue';
import VueRouter from 'vue-router';
import changeCity from './components/changeCity/index.vue';
import Index from './pages/index.vue';
Vue.use(VueRouter);
const routes = [{
    path: '/changeCity',
    component: changeCity
}, {
    path: '/',
    component: Index,
}];
const router = new VueRouter({
    routes
});
export default router;