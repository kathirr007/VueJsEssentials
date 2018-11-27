import Vue from 'vue'
import App from './App'

Vue.config.productionTip = true

/*new Vue({
	el: '#app',
  render: h => h(App),
})*/
new Vue({
  render: h => h(App),
}).$mount('#app')
