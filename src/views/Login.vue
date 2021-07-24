<template>
  <div class="container-fluid">
    <Header />
    <Login :sendData="sendData" :register="false" name="login" />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import Login from '../components/auth/login'
export default {
  components: {
    Header,
    Login
  },
  methods:{
    sendData(form, rememberMe){
      const data = {
        form : form ,
        rememberMe : rememberMe
      }
      this.$store.dispatch('authLogin' , data)
    }
  }
}
</script>

<style scoped>

</style>
