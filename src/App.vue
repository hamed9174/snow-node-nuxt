<script src="router/index.js"></script>
<template>
  <div id="app">
    <router-view/>
    <div class="container-fluid">
      <div class="row footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from './components/common/Footer'
  export default {
    components :{
      Footer
    },
    beforeCreate(){
      if (!this.$store.state.user){
        let user ;
        if (localStorage.getItem('user')){
          user = JSON.parse(localStorage.getItem('user'))
        } else if (sessionStorage.getItem('user')){
          user = JSON.parse(sessionStorage.getItem('user'))
        } else {
          user = null
        };
        this.$store.dispatch('addUser', user)
      }
    },
  }
</script>

<style lang="scss">

</style>
