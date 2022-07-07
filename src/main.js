import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
Vue.config.productionTip = false;
import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;

// 自定义全局注册
// Vue.directive(focuss, {
//   inserted(el) {
//     el.focuss();
//   },
// });

new Vue({
  render: (h) => h(App),
}).$mount('#app');
