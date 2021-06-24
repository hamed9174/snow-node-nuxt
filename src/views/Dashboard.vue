<template>
  <div class="container-fluid">
    <Header />
    <div class="row">
      <div class="dashboard" v-if="user">
        <h3>name: <span>{{user.username}}</span></h3>
        <h3>email: <span>{{user.email}}</span></h3>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/common/Header'
export default {
  name: "Dashboard",
  components: {
    Header
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  }
}
</script>
