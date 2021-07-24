<template>
  <div class="container-fluid">
    <Header />
    <Login :sendData="sendData" :register="true" name="register" />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import Login from "../components/auth/login";
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
      this.$store.dispatch('authRegister' , data)
    },
  }
}
</script>

<style scoped>

</style>
