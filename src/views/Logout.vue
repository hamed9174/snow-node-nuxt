<template>

</template>

<script>
export default {
  name: "Logout",

  mounted(){
    localStorage.setItem('token' , null);
    localStorage.setItem('user' , null);
    sessionStorage.setItem('token' , null);
    sessionStorage.setItem('user' , null);
    this.$store.dispatch('addUser' , null)
    this.$router.push({path: '/'})
  },
}
</script>

<style scoped>

</style>