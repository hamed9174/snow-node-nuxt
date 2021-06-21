<template>
  <div class="row">
    <About :about="about" />
  </div>
</template>
<script>
import {webUrl} from "~/services/xhr";

export default {
  name: "about",
  data(){
    return{
      webUrl,
      about : null
    }
  },
  async asyncData({$api}) {
    const about = await $api.$get('about')
    return{
      about : about
    }
  }
}
</script>
