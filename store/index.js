
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		
		// Socket连接状态
		IsOpen:false,
		// SocketTask
		SocketTask:false,
	},
	getters:{
		
	},
	mutations:{
		
	},
	actions:{
		// 关闭socket
		closeSocket({state}){
			if (state.IsOpen){
				state.SocketTask.close();
			}
		},
		// 打开socket
		openSocket({ state,dispatch }){
			// 防止重复连接
			if(state.IsOpen) return
			// 连接
			state.SocketTask = uni.connectSocket({
			    url: getApp().globalData.websocketUrl,
			    complete: ()=> {}
			});
			if (!state.SocketTask) return;
			// 监听开启
			state.SocketTask.onOpen(()=>{
				// 将连接状态设为已连接
				console.log('将连接状态设为已连接');
				state.IsOpen = true
			})
			// 监听关闭
			state.SocketTask.onClose(()=>{
				console.log('连接已关闭');
				state.IsOpen = false;
				state.SocketTask = false;
				state.IsOnline = false
				// 清空会话列表
				// 更新未读数提示
			})
			// 监听错误
			state.SocketTask.onError(()=>{
				console.log('连接错误');
				state.IsOpen = false;
				state.SocketTask = false;
				state.IsOnline = false
			})
			// 监听接收信息
			state.SocketTask.onMessage((e)=>{
				console.log('接收消息',e);
				// 字符串转json
				let res = JSON.parse(e.data);
				console.log(res);
			})
		},
	}
})