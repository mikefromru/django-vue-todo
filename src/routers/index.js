import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import store from '../store/index'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import PageNotFound from '../components/PageNotFound.vue'

const ifAuthenticated = (to, from, next) => {
    //if(store.getters.isAuthenticated) {
    if(store.getters.authStatus) {
        next()
        return
    }
    next('/login')
}

const ifNotAuthenticated = (to, from, next) => {
    //if(!store.getters.isAuthenticated) {
    if(!store.getters.authStatus || store.getters.authStatus === 'error') {
        next()
        return
    }
    next('/')
}

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        beforeEnter: ifAuthenticated
    },
    {
        path: '/login/',
        component: Login,
        name: 'login',
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '*',
        component: PageNotFound
    }
]

export default new Router ({
    mode: 'history',
    routes,
})
