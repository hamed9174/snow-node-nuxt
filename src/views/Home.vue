<template>
  <div class="container-fluid">
    <scroll-fixed-header :fixed.sync="fixed" :threshold="80">
      <div :class="{nav : !fixed}">
        <Header  :fixed="fixed" />
      </div>
    </scroll-fixed-header>
    <div class="home row">
      <div class="home-about col-12">
        <div class="home-about-bg"></div>
        <div class="home-about-content text-center">
          <div>
            <h6>NEW BRANDING AGENCY</h6>
            <h4>We are about to change the way</h4>
            <h4>you publish on the web</h4>
          </div>
        </div>
        <b-button @click="GoToAbout" pill class="about-btn" variant="outline-danger"><i class="fas fa-long-arrow-alt-down"></i></b-button>
      </div>
      <About />
      <div class="col-12 pattern">
        <div class="container">
          <div class="pattern-content">
            <div class="container-fluid row">
              <div class="pattern-icon col-2">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="pattern-information col-10">
                <h3>548</h3>
                <p>portfolioS COMPLETED</p>
              </div>
            </div>
            <div class="container-fluid row">
              <div class="pattern-icon col-2">
                <i class="far fa-clock"></i>
              </div>
              <div class="pattern-information col-10">
                <h3>1465</h3>
                <p>WORKING HOURS</p>
              </div>
            </div>
            <div class="container-fluid row">
              <div class="pattern-icon col-2">
                <i class="far fa-star"></i>
              </div>
              <div class="pattern-information col-10">
                <h3>612</h3>
                <p>POSITIVE FEEDBACKS</p>
              </div>
            </div>
            <div class="container-fluid row">
              <div class="pattern-icon col-2">
                <i class="far fa-heart"></i>
              </div>
              <div class="pattern-information col-10">
                <h3>735</h3>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 portfolios">
        <div class="container">
          <div class="portfolios-sub text-center">
            <h1 class="pb-5">Best portfolios</h1>
            <p>Donec orci sem, pretium ac dolor et,
              faucibus faucibus mauris. Etiam,pellentesque faucibus.
              Vestibulum gravida volutpat ipsum non ultrices.
            </p>
          </div>
          <div class="portfolios-content mt-5">
            <div class="row">
              <div class="col-12 row">
                <div v-for="portfolio in portfolios" class="portfolio-content col-md-6 col-lg-4">
                  <router-link :to="`single-portfolio/${portfolio._id}`">
                    <img :src="`${webUrl}/assets/images/${portfolio.img}`" alt="">
                    <div class="portfolios-content-hover">
                      <div class="text-center">
                        <h1 class="pb-4">{{portfolio.title}}</h1>
                        <h3 class="category">{{portfolio.category}}</h3>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments/>
      <div class="col-12 brands">
        <div class="brands-slider">
          <Brands/>
        </div>
      </div>
      <div class="col-12 blogs">
        <div class="container">
          <div class="portfolios-sub text-center mb-5">
            <h1 class="pb-5">Latest Blog</h1>
            <p>Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
              Etiam,pellentesque faucibus.
              Vestibulum gravida volutpat ipsum non ultrices.
            </p>
          </div>
          <div class="blog-slider">
            <Blogs/>
          </div>
        </div>
      </div>
      <div class="col-12 contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 contact-info">
              <h1 class="py-4">Contact Info:</h1>
              <p class="py-4">
                Praesent interdum congue mauris, et fringilla lacus pel vitae.
                Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus.
                Quisque cursus risus id. fermentum, in auctor quam consectetur.
              </p>
              <p class="py-2">
                <span>Address:</span> 10111 Santa Monica Boulevard, LA
              </p>
              <p class="py-2">
                <span>Phone:</span> +44 987 065 908
              </p>
              <p class="py-2">
                <span>Email:</span> info@Example.com
              </p>
              <p class="py-2">
                <span>Fax:</span> +44 987 065 909
              </p>
            </div>
            <div class="col-lg-7 contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
        <b-modal v-model="modalShow" ok-only >Message sent successfully</b-modal>
      </div>
    </div>
  </div>

</template>

<script>
import Header from '../components/common/indexHeader'
import About from "../components/about";
import Comments from "../components/comments/Comments";
import Brands from "../components/brands/Brands";
import Blogs from "../components/blogs/Blogs";
import Portfolio from '../components/portfolios/Portfolio'
import {webUrl} from "../services/xhr";
import api from "../services/api";
import ContactForm from "../components/ContactForm";

export default {
  name: 'Home',
  title : 'Home',
  layout : 'index',
  components: {
    Header,
    About,
    Portfolio,
    Comments,
    Brands,
    Blogs,
    ContactForm
  },
  data(){
    return{
      webUrl,
      fixed:false,
      portfolios : [],
      comments : [],
      fixed: false,
      contact: {
        email: '',
        name: '',
        title : '',
        message : ''
      },
      show: true,
      modalShow : false
    }
  },
  async beforeMount() {
    await api.get('portfolios').then(
        res => this.portfolios = res.data
    ).catch(err => console.log(err))
  },
  methods: {
    GoToAbout(){
      if (window.innerWidth > 900){
        window.scrollTo(0,700)
      } else if (window.innerWidth < 900 && window.innerWidth > 600){
        window.scrollTo(0,400)
      } else {
        window.scrollTo(0,300)
      }
    },
  }
}
</script>
