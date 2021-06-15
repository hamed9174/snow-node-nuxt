<template>
  <div class="row">
    <div v-if="about" class="about col-12">
      <div class="about-content text-center">
        <h1 class="mb-4">About Our Agency</h1>
        <p class="mb-3 text-secondary">
          {{about.content}}
        </p>
        <div class="about-content">
          <img :src="`${webUrl}/assets/images/${about.img}`" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {webUrl} from "~/services/xhr";

export default {
    name : 'About',
    head(){
      return{
        title : 'about'
      }
    },
    data(){
      return{
        webUrl,
        about: null
      }
    },
    async asyncData({$api}) {
      const about = await $api.$get('about')
        return {
          about : about
        }
    },
  }
</script>
