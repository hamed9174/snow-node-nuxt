<template>
  <div class="about col-12">
    <div v-if="about" class="about-content text-center">
      <h1 class="mb-4">About Our Agency</h1>
      <p class="mb-3 text-secondary">
        {{about.content}}
      </p>
      <div class="about-content">
        <img :src="`${webUrl}/assets/images/${about.img}`" alt="">
      </div>
    </div>
    <div class="col-12 py-3" v-else>
      <b-alert show variant="warning" class="py-3">Error receiving information</b-alert>
    </div>
  </div>
</template>

<script>
import {webUrl} from "../services/xhr";
import api from "../services/api";

export default {
  name: "about",
  data(){
    return{
      webUrl,
      about : null
    }
  },
  async created() {
    await api.get('about').then(
      res => this.about = res.data
    ).catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
