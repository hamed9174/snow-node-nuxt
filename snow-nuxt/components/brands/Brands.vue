<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper-example-multiple-slides-per-biew',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 4,
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
  }
}
</script>
