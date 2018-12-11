import Vue from 'vue';
import VueRouter from 'vue-router';
import changeCity from './pages/changeCity.vue';
import Index from './pages/index.vue';
import defaultPage from './layouts/default.vue';
import blackPage from './layouts/blank.vue';
import register from './pages/register.vue';
import login from './pages/login.vue';
import exit from './pages/exit.vue';
import goods from './pages/goodsList.vue';
Vue.use(VueRouter);
const routes = [{
    path: '/',
    redirect: '/default/index'
}, {
    path: '/default',
    components: {
        page: defaultPage
    },
    children: [{
        path: 'index',
        components: {
            main: Index
        }
    }, {
        name: 'changeCity',
        path: 'changeCity',
        components: {
            main: changeCity
        }
    }, {
        name: 'goods',
        path: 's/:id',
        components: {
            main: goods
        }, 
    }]
}, {
    path: '/black',
    components: {
        page: blackPage,
    },
    children: [{
        name: 'register',
        path: 'register',
        components: {
            main: register,
        }
    },{
        name: 'login',
        path: 'login',
        components: {
            main: login,
        }
    }, {
        name: 'exit',
        path: 'exit',
        components: {
            main: exit,
        }
    }]
}];
const router = new VueRouter({
    routes,
    mode: 'hash',
});
export default router;