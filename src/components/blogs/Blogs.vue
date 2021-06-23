<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="blog in blogs">
      <Blog :blog="blog" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import api from '../../services/api'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Blog from "./blog"
export default {
  name: 'swiper-example-multiple-slides-per-biew',
  components: {
    Blog,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      blogs: [],
      swiperOption: {
        loop : true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  async beforeMount() {
    await api.get('blogs').then(
      (res) => {
        this.blogs = res.data
      }
    ).catch(
      err => console.log(err)
    );
  }
}
</script>
