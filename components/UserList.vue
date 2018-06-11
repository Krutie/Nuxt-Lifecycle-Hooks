<template>
  <div class="list">
    <li v-for="user in users" :key="user.id">
      {{ user.id}}. {{ user.name}}
      <nuxt-link :to="'/'+user.id">View Detail</nuxt-link>
    </li>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        users: []
      }
    },
    created () {
      return this.$axiosClient.getData('users')
       .then(response => {
          console.table(response.data)
          this.users = response.data
      })
    }
  }
</script>
<style>
.list {
  text-align: left;
}
</style>
