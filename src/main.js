import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import Test from '@/directives/Test';

Vue.config.productionTip = false;

// global directive to help testing
Vue.directive('test', Test);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
