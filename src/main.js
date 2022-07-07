import Vue from 'vue';
import App from './App.vue';
import './assets/fonts/iconfont.css'; // 引入字体图标css文件
import 'bootstrap/dist/css/bootstrap.css';
// console.dir(Vue);

Vue.config.productionTip = false;

import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;

Vue.directive('foucs', {
  inserted(el) {
    el.focus();
  },
});

Vue.directive('permissions', {
  inserted(el, bind) {
    // console.log(el);
    // console.log(bind);
    // console.log(bind.expression);
    bind.expression == 'admin'
      ? (el.style.display = 'none')
      : (el.style.display = 'block');
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
