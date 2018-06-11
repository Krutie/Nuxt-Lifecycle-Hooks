import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
      authenticated: true,
      posts: []
    },
    mutations: {
      setUsers: (state, users) => {
        state.users = users
      },
      setCurrentUserPosts: (state, posts) => {
        state.posts = posts
      }
    },
    actions: {
      getPosts ({ commit }, userId) {
        return this.$axiosClient.getData('/posts?userId='+userId)
        .then( response => {
          commit('setCurrentUserPosts', response.data)  
        })
      },
      nuxtServerInit (vuexContext, nuxtContext) {
        console.log('nuxtServerInit called')
        return nuxtContext.app.$axiosClient.getData('users')
         .then(response => {
            console.log('Total Users from nuxtServerInit - ' + response.data.length)
            nuxtContext.store.commit('setUsers', response.data)
        })
      }
    }
  })
}
export default createStore