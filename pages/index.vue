<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <user-list/>
<!--       <h1 class="title">
        lifecycle
      </h1> -->
      <h2 class="subtitle">
        Nuxt.js Lifecycle Hooks
      </h2>

      <div class="links">
        <a class="button--green" @click="showLoginError">Notification from pages/index.vue</a>
        <!-- <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a> -->
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import UserList from '~/components/UserList.vue'
import axios from 'axios'
export default {
  notifications: {
    showLoginError: {
      title: 'Exploring Nuxt Js Lifecycle',
      message: 'It is just a tip of the iceberg!!',
      type: 'success' //Default: 'info'
    }
  },
  asyncData ( {app} ) {
    return app.$axiosClient.getData('users')
     .then (response => {
       console.log('Total Users - ' + response.data.length)
      })
  },
  components: {
    AppLogo, UserList
  },
  middleware: 'page-middleware'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
