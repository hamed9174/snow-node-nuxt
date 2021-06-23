<template>
  <div class="container-fluid">
    <Header />
    <div class="blog row pt-5">
      <div class="col-12">
        <div class="container">
          <div :class="['toggle-menu' , 'text-center' ,{ 'toggle-menu-black' : menuActive}]">
            <i @click="selectMenuActive" class="fas fa-th-large"></i>
          </div>
          <transition name="categories" v-if="categories.length">
            <div v-show="menuActive" ref="categoryMenu" class="blog-menu mt-3">
              <ul>
                <li v-for="category in categories" @click="MenuActive($event , category)">{{category.toUpperCase()}}</li>
              </ul>
            </div>
          </transition>

          <div class="single-blogs" v-if="blogs.length" v-for="blog in blogs">
            <router-link :to="`single-blog/${blog._id}`">
              <div class="blog-img">
                <img :src="require(`@/assets/images/${blog.img}`)" alt="">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/common/Header'
  import api from '../services/api'
  export default {
    name: "Blog",
    head:{
      title : 'Blogs'
    },
    components: {
      Header,
    },
    data(){
      return{
        menuActive : false,
        blogs:[],
        blog : [],
        categories: [],
        email: '',
        firstName: '',
        lastName: ''
      }
    },
    async beforeMount() {
      await api.get('blogs').then(
          res => {
              this.blogs = res.data
              this.blog = res.data
          }
      ).catch(err => console.log(err))

      await api.get('blog-category').then(
          res => {
              this.categories = res.data[0].categories
          }
      ).catch(err => console.log(err))
    },
    methods:{
      selectMenuActive(){
        this.menuActive = !this.menuActive
        let liEls = this.$refs.categoryMenu.querySelectorAll('li')
        let Item = new Array ;
        liEls.forEach(item => {
          if (item.classList.value === 'active'){
            Item.push(item)
          }
        })
        if (Item.length){
          return
        }else {
          this.$refs.categoryMenu.querySelector('li:first-child').classList.add('active')
        }
      },
      MenuActive(event , category){
        this.$refs.categoryMenu.getElementsByTagName('li').forEach(item => {
          item.classList.remove('active')
        })
        event.target.classList.add('active')
        this.BlogsUpdate(category)
      },
      BlogsUpdate(blogs){
        if(blogs === 'all'){
          this.blogs = this.blog
        } else {
          let blogCategory = this.blog.filter(item => item.category === blogs);
          this.blogs = blogCategory
        }
      }
    }
  }
</script>

<style scoped>
.categories-enter,.categories-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.categories-enter-active, .categories-leave-active {
  transition: all 1s ease;
}
</style>
