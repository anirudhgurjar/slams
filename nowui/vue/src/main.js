import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

Vue.use(NowUiKit);


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKqeMsRW_Fyaf04IW_wps_JmEE_WaH5gk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  }});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
