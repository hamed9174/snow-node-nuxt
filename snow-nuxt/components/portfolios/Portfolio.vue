<template>
  <router-link :to="`single-portfolio/${portfolio._id}`">
    <img :src="require(`@/assets/images/${portfolio.img}`)" alt="">
    <div class="portfolios-content-hover">
      <div class="text-center">
        <h1 class="pb-4">{{portfolio.title}}</h1>
        <h3 class="category">{{portfolio.category}}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Portfolio",
  props:['portfolio']
}
</script>

<style scoped>

</style>
