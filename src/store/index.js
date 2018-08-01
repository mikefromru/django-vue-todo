import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist ({
    storage: window.localStorage
})

import account from './modules/account'
import todo from './modules/todo'

export default new Vuex.Store ({
    modules: {
        account,
        todo,
    },
    plugins: [vuexLocalStorage.plugin]
})
