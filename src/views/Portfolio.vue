<template>
  <div class="container-fluid">
    <Header />
    <div class="portfolio row pt-5">
      <div class="col-12">
        <div class="container">
          <div :class="['mb-5' , 'toggle-menu' , 'text-center' ,{ 'toggle-menu-black' : menuActive}]">
            <i @click="menuActive = !menuActive" class="fas fa-th-large"></i>
          </div>
          <transition name="categories">
            <div v-show="menuActive" class="blog-menu mt-3">
              <ul>
                <li @click="MenuActive($event , 'all')" class="active">ALL</li>
                <li @click="MenuActive($event , 'print')">PRINT</li>
                <li @click="MenuActive($event , 'photography')">PHOTOGRAPHY</li>
                <li @click="MenuActive($event , 'branding')">BRANDING</li>
                <li @click="MenuActive($event , 'design')">DESIGN</li>
                <li @click="MenuActive($event , 'mockup')">MOCKUP</li>
              </ul>
            </div>
          </transition>
          <div class="portfolios-content mt-4">
            <div class="row">
              <div class="col-12 row">
                <div v-for="portfolio in portfolios" class="portfolio-content col-md-6 col-lg-4">
                  <Portfolio :portfolio="portfolio" />
                </div>
              </div>
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
import Portfolio from '../components/portfolios/Portfolio'
  export default {
    name: "Portfolios",
    components: {
      Header,
      Portfolio
    },
    data(){
      return{
        menuActive : false,
        portfolio:[],
        portfolios:[]
      }
    },
    async beforeMount() {
      await api.get('portfolios').then(
          res => {
              this.portfolios = res.data
              this.portfolio = res.data
            }
      )
    },
    methods:{
      MenuActive(event , portfolios){
        event.target.parentNode.getElementsByTagName('li').forEach(item => {
          item.classList.remove('active')
        })
        event.target.classList.add('active')

        this.PortfoliosUpdate(portfolios)
      },
      PortfoliosUpdate(portfolios){
        if (portfolios === 'all'){
          this.portfolios = this.portfolio
        } else {
          let portfolioCategory = this.portfolio.filter(item => item.category == portfolios);
          this.portfolios = portfolioCategory
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
  transition: all .5s ease;
}
</style>
