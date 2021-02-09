import Vue from 'vue'
import App from './App.vue'

//import animate onscroll
import VueAnimateOnScroll from 'vue-animate-onscroll'

//importing fulpagejs
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import 'animate.css'

 
Vue.use(VueAnimateOnScroll)
Vue.use(VueFullPage);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
