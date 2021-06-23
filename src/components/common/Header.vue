<template>
    <div class="container">
        <div class="header default-header row">
          <div class="header-logo col-lg-2 col-6">
              <img src="../../assets/images/logo.png" alt="">
          </div>
          <div class="header-menu col-lg-7">
              <ul>
                  <li>
                      <router-link to="/">Home</router-link>
                  </li>
                  <li>
                      <router-link to="/about">About</router-link>
                  </li>
                  <li>
                      <router-link to="/contact">Contact</router-link>
                  </li>
                  <li>
                      <router-link to="/blog">Blog</router-link>
                  </li>
                  <li>
                      <router-link to="/portfolio">Portfolio</router-link>
                  </li>
              </ul>
          </div>
          <div class="login col-lg-2 col-4" v-if="!user">
            <router-link to="/login">
                <b-button variant="outline-success">login</b-button>
            </router-link>
            <router-link to="/register">
                <b-button variant="outline-danger">register</b-button>
            </router-link>
          </div>
          <div class="login col-lg-3 col-4 text-right" v-else>
            <b-button @click="Logout" class="float-right" variant="outline-success">logout</b-button>
            <router-link class="profile" to="/dashboard">
              <b-button><b-icon icon="person"></b-icon>{{user.username}}</b-button>
            </router-link>
          </div>
            <div class="header-bar text-right col-2">
                <i v-show="!mobileMenu" class="fas fa-bars" @click="mobileMenuActive"></i>
                <i v-show="mobileMenu" class="fas fa-times" @click="mobileMenu = false"></i>
            </div>
        </div>
        <div class="mobile-menu" v-show="mobileMenu">
            <ul>
                <li><router-link @click.native="mobileMenuLocation('/')" to="">Home</router-link></li>
                <li><router-link @click.native="mobileMenuLocation('about')" to="">About</router-link></li>
                <li><router-link @click.native="mobileMenuLocation('blog')" to="">Blog</router-link></li>
                <li><router-link @click.native="mobileMenuLocation('portfolio')" to="">Portfolio</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "Header",
    props:['fixed'],
    data(){
        return{
            headerScroll : false,
            mobileMenu : false
        }
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      ...mapActions(['setUser']),
      Logout(){
        localStorage.setItem('token' , null);
        localStorage.setItem('user' , null);
        sessionStorage.setItem('token' , null);
        sessionStorage.setItem('user' , null);
        this.setUser(null);
        this.$router.push({name:'Home'})
      },
      mobileMenuActive(){
          this.mobileMenu = true
      },
      mobileMenuLocation(location){
          this.mobileMenu = false;
          window.location = location
      }
    }
  }
</script>

<style scoped>

</style>
