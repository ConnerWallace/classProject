import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import { BootstrapVue, IconsPlugin, ButtonPlugin } from 'bootstrap-vue'
import Axios from 'axios'
import store from './store'

Vue.prototype.$store = store;

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Install B-Button
Vue.use(ButtonPlugin)

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');