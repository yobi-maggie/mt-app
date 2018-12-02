import Vue from 'vue';
import VueRouter from 'vue-router';
import changeCity from './pages/changeCity.vue';
import Index from './pages/index.vue';
import defaultPage from './layouts/default.vue';
import blackPage from './layouts/blank.vue';
import register from './pages/register.vue';
import login from './pages/login.vue';
Vue.use(VueRouter);
const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    components: {
        page: defaultPage
    },
    children: [{
        path: '',
        components: {
            main: Index
        }
    }]
},  {
    path: '/register',
    components: {
        page: blackPage,
    },
    children: [{
        path: '',
        components: {
            main: register,
        }
    }]
},  {
    path: '/login',
    components: {
        page: blackPage,
    },
    children: [{
        path: '',
        components: {
            main: login,
        }
    }]
}, {
    path: '/changeCity',
    components: {
        page: defaultPage,
    },
    children: [{
        path: '',
        components: {
            main: changeCity
        }
    }]
}];
const router = new VueRouter({
    routes,
    mode: 'history',
});
export default router;