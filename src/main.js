import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
import axios from 'axios';
Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});
Vue.directive('zzz', {
  inserted(el, binding) {
    binding.value == 1
      ? (el.style.display = 'none')
      : (el.style.display = 'block');
      // console.log(qqq);
      // console.log(el);
  },
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
