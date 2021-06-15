<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <div class="container-fluid">
      <Nuxt />
    </div>
    <div class="footer row">
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from "~/components/common/Header";
  import Footer from "~/components/common/Footer";
  export default {
    data(){
      return {
        fixed: false,
      }
    },
    components:{
      Header,
      Footer
    }
  }
</script>

<style>

</style>
