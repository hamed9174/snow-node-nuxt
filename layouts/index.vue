<template>
  <div id="app">
    <scroll-fixed-header :fixed.sync="fixed" :threshold="80">
      <div :class="{nav : !fixed}">
        <Header  :fixed="fixed" />
      </div>
    </scroll-fixed-header>
    <div class="container-fluid">
      <Nuxt />
    </div>
    <div class="footer row">
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from "~/components/common/indexHeader";
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
