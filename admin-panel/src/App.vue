<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    create() {
      if (localStorage.getItem('token')){
        location.hash = '/'
      } else{
        location.hash = '/login'
      }
    }
  }
</script>
