import Vue from 'vue'
import App from './App.vue'


//importing fulpagejs
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

 
Vue.use(VueFullPage);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
