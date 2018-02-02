import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';

import App from './App.vue';

Vue.use(VueOnsen);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
});
