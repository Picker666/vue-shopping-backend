import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';

import 'normalize.css';
import '@/assets/css/base.css';

Vue.config.productionTip = false;

Vue.filter('formatPrecision', function (val, precision=2) {
  let [int, decimal=''] = val.split('.');
  const decimalLength = decimal.length;
  if (decimalLength > precision) {
    if (precision === 0) {
      const next = decimal[0];
      if (next > 4) {
        int++;
      }
      return String(int);
    }
    let pre = decimal.slice(0, precision - 1);
    let current = decimal[precision - 1];
    const next = decimal[precision];
    if (next > 4) {
      current++;

      if (current > 9) {
        current = current % 10;
        const oldPreLength = pre.length;
        pre++;
        pre = pre.toString();
        if (pre.length > oldPreLength) {
          pre = pre.slice(1);
        }
        int++;
      }
    }
    decimal = '.' + pre + current;
  } else if (decimalLength < precision) {
    const delta = precision - decimalLength;
    let i = 0;
    while (i<delta) {
      decimal += '0';
      i++;
    }
    decimal = '.' + decimal;
  }
  return int + decimal;
})
Vue.filter('thousandthMark', function (val) {
  return val.replaceAll(/(?<!\.\d*)(?=(\B\d{3})+($|\.))/g, ',')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
