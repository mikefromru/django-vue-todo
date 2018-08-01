import axios from 'axios'

const state = {
    name: [],
}

const actions = {
    GET_TODO: ({commit}) => {
        axios.get('/api/todo/')
        .then(response => {
            commit('GET_TODO', response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },
    ADD_TODO: ({commit}, data)  => {
        return axios.post('/api/todo/', data)
        .then(response => {
            commit('ADD_TODO', data)
        })
        .catch(error => {
            console.log(error)
        })
    },
    DELETE_ONE_TODO: ({commit}, data) => {
        return axios.delete('/api/todo/' + data + '/')
        .then(response => {
            commit('DELETE_ONE_TODO', data)
        })
    }
}

const mutations = {
    DELETE_ONE_TODO: (state, data) => {
        state.name = state.name.filter(name => name.id != data)  
    },
    GET_TODO: (state, name) => {
        state.name = name
    },
    ADD_TODO: (state, data) => {
        state.name.push(data)
        console.log(state.name)
    }
}

const getters = {
    name: state => state.name
}

export default {
    state,
    actions,
    mutations,
    getters
}



