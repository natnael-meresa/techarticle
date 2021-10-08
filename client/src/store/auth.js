import axios from 'axios'


export const moduleA = {
    state: {
        user: null,
    },

    mutations: {
        SET_USER_DATA(state, userData) {
          state.user = userData
          localStorage.setItem('user', JSON.stringify(userData))
          axios.defaults.headers.common['Authorization'] = `Bearer ${
            userData.token
          }`
        },
        CLEAR_USER_DATA () {
          localStorage.removeItem('user')
          location.reload()
          // router.go('Home')
           // rgb(19, 120, 31)
        },
    },

    actions: {
        register({commit}, credentials) {
          return axios.post('//localhost:8081/api/auth/register', credentials).then(({ data }) => {
            console.log(`${data}`)
            commit('SET_USER_DATA', data)
          })
        },

        login({commit}, credentials) {
          return axios.post('//localhost:8081/api/auth/login', credentials).then(({data}) => {
            commit('SET_USER_DATA', data)
          })
        },
        logout ({ commit }) {
          commit('CLEAR_USER_DATA')
        },
        createArticle( {commit}, credentials) {
          return axios.post('//localhost:8081/api/article/create', credentials).then(({data}) => {
            console.log(`${data}`)
            console.log(commit)
          })
        }
    },

    getters: {
        loggedIn (state) {
          return state.user
        },
        userName (state) {
          return state.user.username
        },
    }
}



