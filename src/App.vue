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
  import { mapActions } from 'vuex'
  export default {
    components :{
      Footer
    },
    created(){
      let user ;
      if (localStorage.getItem('user')){
        user = JSON.parse(localStorage.getItem('user'))
      } else if (sessionStorage.getItem('user')){
        user = JSON.parse(sessionStorage.getItem('user'))
      } else {
        user = null
      };
      this.addUser(user)
    },
    methods : {
      ...mapActions(['addUser'])
    }
  }
</script>

<style lang="scss">

</style>
