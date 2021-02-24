import Vue from 'vue'
import Vuex from 'vuex'
import Services from '@/services/services'

Vue.use(Vuex)


const store =  new Vuex.Store({
    state: {
        users: [],
        user_edit: {},
    },
    mutations: {
        setUsers (state, payload) {
            state.users = payload
        },
        addUser (state, payload) {
            state.users.push(payload);
        },
        removeUser (state, payload) {
            const users = state.users.filter(user => {
                if( user.id !== payload) {
                    return user;
                }
            })
            state.users = users;
        },
        updateUser (state, payload) {
            const user = state.users.find(user => user.id === payload.id)
            Object.assign(user, payload)

            console.log(state.users);
        },
        setUserEdit(state, payload) {
            state.user_edit = payload
        },
        clearUserEdit (state) {
            state.user_edit = {}
        },
    },
    actions: {
        getUsers ({ commit }) {
            Services.getUsers()
                    .then(res => {
                        commit('setUsers', res)
                    })
        },
        createUser ({ commit }, payload) {
            Services.createUser(payload)
                .then( res => {
                    commit('addUser', res);
                })
        },
        updateUser ({ commit, state }) {
            Services.updateUser(state.user_edit)
                    .then( res => {
                        commit('updateUser', res)
                    })
        },
        deleteUser ( {commit }, payload) {
            Services.deleteUser(payload)
                .then( res => {
                    commit('removeUser', payload)                    
                })
        }
    },
});


export default store;