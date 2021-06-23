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
import api from '../services/api';
import About from '../components/about'
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
    await api.get('about').then(
        res => this.about = res.data
    ).catch(err => console.log(err))
  }
}
</script>
