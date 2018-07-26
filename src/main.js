import './assets/css/global.scss'


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import VueLazyload from './vue-lazyload'

Vue.use(VueLazyload, {
  lazyImage: true
});

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Spinner from 'vue-spinner/src/BounceLoader';
Vue.component('spinner', Spinner);
import Back from './components/Back'
Vue.component('back', Back);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


window.WS_VERSION = '1.0.0';