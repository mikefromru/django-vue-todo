import axios from 'axios'

const state = {
    token: localStorage.getItem('user-token') || '',
    status: null,
    profile: {},
}

const actions = {
    AUTH_SOCIAL_FACEBOOK: ({commit, dispatch}, data) => {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST')
            axios.post('/api/rest-auth/facebook/', data)
            .then(response => {
                let profile = response.data.user
                const token = response.data.token
                localStorage.setItem('user-token', token)
                commit('AUTH_SUCCESS', token)
                commit('GET_PROFILE', profile)
                resolve(response)
            })
            .catch(error => {
                commit('AUTH_ERROR')
                localStorage.clear()
                reject(error)
            })
        })
    },
    AUTH_SOCIAL_GOOGLE: ({commit, dispatch}, data) => {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST')
            axios.post('/api/rest-auth/google/', data)
            .then(response => {
                let profile = response.data.user
                const token = response.data.token
                localStorage.setItem('user-token', token)
                commit('AUTH_SUCCESS', token)
                commit('GET_PROFILE', profile)
                resolve(response)
            })
            .catch(error => {
                commit('AUTH_ERROR')
                localStorage.clear()
                reject(error)
            })
        })
    },
    LOGOUT: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            localStorage.clear()
            console.log('hello workl')
            commit('LOGOUT')
            resolve()
        })
    }
}

const mutations = {
    AUTH_REQUEST: (state) => {
        state.status = 'loading...'
    },
    AUTH_SUCCESS: (state, token) => {
        state.status = 'success'
        state.token = token
    },
    AUTH_ERROR: (state) => {
        state.status = 'error'
    },
    GET_PROFILE: (state, profile) => {
        state.profile = profile
    },
    LOGOUT: (state) => {
        state.token = ''
        state.status = null
        state.profile = {}
    }
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    profile: state => state.profile,
}

export default {
    state,
    actions,
    mutations,
    getters,
}
