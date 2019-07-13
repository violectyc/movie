import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './stores'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';

import 'swiper/dist/css/swiper.min.css';

Vue.prototype.axios = axios;
Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
