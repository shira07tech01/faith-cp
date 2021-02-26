import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css' //追加
import 'bootstrap-vue/dist/bootstrap-vue.css' //追加
import router from './router'
import store from './store'

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App)
}).$mount('#app')
