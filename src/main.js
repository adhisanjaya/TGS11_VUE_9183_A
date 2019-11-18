import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.prototype.$http = Axios;
Vue.prototype.$apiUrl = 'http://localhost/ugd11/index.php';

Vue.config.productionTip = false

new Vue({
  render: h => h(App), 
  router, 
  vuetify, 
  components: { App } 
}).$mount('#app')
