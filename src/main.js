import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// prototype pour créer pour regarde si il y a un token ou non
Vue.prototype.$checkStore = localStorage.getItem("token") != null;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
