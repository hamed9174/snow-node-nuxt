<template>
  <div class="container-fluid">
    <Header />
    <div class="row">
      <About :about="about" />
    </div>
  </div>
</template>
<script>
import Header from '../components/common/Header'
import {webUrl} from "../services/xhr";
import About from '../components/about'
import {getAbout} from "../actions/actions";
export default {
  name: "about",
  components: {
    Header,
    About
  },
  data(){
    return{
      webUrl,
      about : null
    }
  },
  async mounted() {
    this.about = await getAbout()
  }
}
</script>
