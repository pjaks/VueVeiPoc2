import Vue from 'vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

Vue.config.productionTip = false;

Vue.component('HomeComponent', HomeComponent);
Vue.component('AboutComponent', AboutComponent);

new Vue({ // eslint-disable-line no-new
  el: '#app',
});

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');
