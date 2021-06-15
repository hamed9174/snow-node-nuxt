<template>
  <div class="row">
    <About />
  </div>
</template>
<script>
  import About from "~/components/about";
  export default {
    name : 'About',
    head(){
      return{
        title : 'about'
      }
    },
    components:{
      About
    }
  }
</script>
