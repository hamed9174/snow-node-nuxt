import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ValidationObserver } from 'vee-validate';
import { ValidationProvider} from 'vee-validate/dist/vee-validate.full.esm';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import ScrollFixedHeader from 'vuejs-scroll-fixed-header';
Vue.use(ScrollFixedHeader);


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver )

// Import CSS files (order is important)
import 'swiper/css/swiper.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/fontawesome/css/all.css'
import './assets/css/main.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
