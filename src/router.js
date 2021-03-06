import Vue from 'vue';
import Router from 'vue-router';
import Home from '../src/views/Home.vue'
import Login from '../src/views/Login.vue'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router;