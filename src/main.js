import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from 'dayjs';
import 'vue-orgchart/dist/style.min.css'
import VueAMap from 'vue-amap';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$dayjs = dayjs

VueAMap.initAMapApiLoader({

  key: "97a78fdd9a741cd14f435fee2402bd16",

  plugin: [

    "AMap.Autocomplete",

    "AMap.PlaceSearch",

    "AMap.Scale",

    "AMap.OverView",

    "AMap.ToolBar",

    "AMap.MapType",

    "AMap.PolyEditor",

    "AMap.CircleEditor",

    "AMap.Geocoder"

  ],

  // 默认高德 sdk 版本为 1.4.4

  v: "1.4.4"

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')