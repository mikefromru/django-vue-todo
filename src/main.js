import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import store from './store/index'
import router from './routers/index'

import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = 'http://localhost:8000/'

axios.interceptors.request.use(function (config) {
    const userToken = localStorage.getItem('user-token');
        if(userToken) config.headers["Authorization"] = `JWT ${userToken}`;
        return config;
});


new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
