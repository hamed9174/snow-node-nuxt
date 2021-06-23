<template>
  <div class="blog-single">
    <router-link :to="`single-blog/${blog._id}`">
      <div class="blog-img">
        <img :src="`${webUrl}/assets/images/${blog.img}`" alt="">
        <b-button class="category">{{blog.category}}</b-button>
        <div class="blog-bg"></div>
      </div>
    </router-link>
    <div class="blog-content">
      <router-link :to="`single-blog/${blog._id}`">
        <h1>{{blog.title}}</h1>
      </router-link>
      <h4>{{blog.create_at.month}} {{blog.create_at.day}}, {{blog.create_at.year}}</h4>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
import {webUrl} from "../../services/xhr";
export default {
  name: "blog",
  props:['blog'],
  data(){
    return{
      webUrl
    }
  }
}
</script>

<style scoped>

</style>
