import Vue from 'vue'
import App from './App'
import store from './storage/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
