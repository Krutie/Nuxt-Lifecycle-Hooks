<template>
  <section class="container">
     <div class="user-detail">
      Name: {{ user.name }} <br>
      Email: {{ user.email }} <br>
      City: {{ user.address.city }} <br>
      Phone: {{ user.phone }} <br>
      Website: {{ user.website }} <br>
      Company: {{ user.company.name }} <br>
     </div>
  </section>
</template>
<script>
  export default {
    middleware: 'page-middleware',
    // validate hook
    validate ({ params, query, store}) {
      console.log('Validate hook called from dynamic route')
      let user = store.state.users.find((obj) => {
        return obj.id == params.id
      })
      return user ? true : false
      // alternate one-line script to achieve the same
      // return store.state.users.find((obj) => obj.username == params.username) ? true : false
    },
    data () {
      return {
        user: {}
      }
    },
    // asyncData hook - to set the (page) component data locally
    asyncData ({app, params}) {
      console.log('asyncData called')
      return app.$axiosClient.getData('/users/'+params.id)
         .then(response => {
          // set data in local variable
          return { user: response.data }
        })
    },
    // asyncData with async-await
    // async asyncData ({app, params}) {
    //   console.log('asyncData called')
    //   let response = await app.$axiosClient.getData('/users/'+params.id)
    //   // set data in local variable
    //   return { user: response.data }
    // },
    fetch ( {store, params} ) {
      console.log('fetch called')
      return store.dispatch('getPosts', params.id)
    },
    created () {
      console.log('Created hook called')
    },
    mounted () {
      console.log('Mounted hook called')
    }
  }
</script>
<style>
.user-detail {
  text-align: left;
}
</style>