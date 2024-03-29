import Vue from 'vue'
import App from './App'
import store from './store/index.js';

Vue.prototype.$store = store

// 引入封装好的请求文件
import { http } from './util/api.js';
// 挂载到vue原型上，通过this.$http调用
Vue.prototype.$http = http;
// 引入全局过滤
import '@/util/filter.js';
// 引入工具类
import tools from '@/util/common.js';
Vue.use(tools)
// 引入全局工具类
import $util from '@/util/util.js'
Vue.prototype.$util = $util

// 注册全局组件
// import XXX from '';
// Vue.component('xxx', XXX)
// <xxx></xxx>

//缓存,默认有效期8小时
Vue.prototype.$storage = function(key, value, seconds) {
	var timestamp = Date.parse(new Date()) / 1000
	// console.log(timestamp + "===" + key)
	if (key && value === null) {
		//删除缓存
		//获取缓存
		var val = uni.getStorageSync(key);
		var tmp = val.split("|")
		// console.log(timestamp);
		// console.log(tmp[1]);
		if (!tmp[1] || timestamp >= tmp[1]) {
			console.log("token已失效")
			uni.removeStorageSync(key)
			setTimeout(()=>{
				uni.reLaunch({
					// 注意路径为相对路径
					url: '../login/login'
				})
			},500)
		} else {
			console.log("token未失效")
			setTimeout(()=>{
				uni.switchTab({
					// 注意路径为相对路径
					url: '../home/home'
				})
			},500)
		}
	} else if (key && value) {
		//设置缓存
		if (!seconds) {
			var expire = timestamp + (3600 * 8)
		} else {
			var expire = timestamp + seconds
		}
		value = value + "|" + expire
		uni.setStorageSync(key, value);
	} else {
		console.log("key不能空")
	}
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
