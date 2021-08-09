export default {
// App.vue
	// 监听用户登录状态
	onUserState() {
		let token = +uni.getStorageSync('token')
		console.log(token);
		// #ifdef H5
		if (!token) {
			//不存在则跳转至登录页
			setTimeout(()=>{
				uni.reLaunch({
					url: "/pages/login/login"
				})
			},1000)
		} else{
			uni.switchTab({
				url: 'pages/platform/platform'
			})
		}
		// #endif
		
		// #ifdef APP-PLUS
		// token标志来判断
		if (!token) {
			//不存在则跳转至登录页
			uni.reLaunch({
				url: "/pages/login/login",
				success: () => {
					plus.navigator.closeSplashscreen();
				}
			})
		} else {
			//存在则关闭启动页进入首页
			// plus.navigator.closeSplashscreen();
			setTimeout(() => {
				plus.navigator.closeSplashscreen();
			}, 2400);
		}
		// //设置2.4秒后主动关闭，最多设置6秒
		setTimeout(() => {
			plus.navigator.closeSplashscreen();
		}, 2400);
		// #endif
		
	},
	// 监听网络
	onNetWorkState(){
		uni.getNetworkType({
		    success: function (res) {
		        console.log(res.networkType);
						if(res.networkType === 'none'){
							uni.showToast({
								title: '当前处于断网状态，请先连接网络',
								icon: 'none'
							});
						}
		    }
		});
		uni.onNetworkStatusChange(function (res) {
				if(res.networkType === 'none'){
					uni.showToast({
						title: '当前处于断网状态，请先连接网络',
						icon: 'none'
					});
				}else if(res.networkType === '2g' || res.networkType === '2g'){
					uni.showToast({
						title: '当前网络信号弱，建议更换网络',
						icon: 'none'
					});
				}
		});
	},
	// 热更新
	onHotUpdate() {
		// #ifdef APP-PLUS  
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
		    uni.request({  
		        url: 'http://www.example.com/update/',  // 换成后台更新地址
		        data: {  
		            version: widgetInfo.version,  
		            name: widgetInfo.name  
		        },  
		        success: (result) => {  
		            var data = result.data;  
		            if (data.update && data.wgtUrl) {  
		                uni.downloadFile({  
		                    url: data.wgtUrl,  
		                    success: (downloadResult) => {  
		                        if (downloadResult.statusCode === 200) {  
		                            plus.runtime.install(downloadResult.tempFilePath, {  
		                                force: false  
		                            }, function() {  
		                                console.log('install success...');  
		                                plus.runtime.restart();  
		                            }, function(e) {  
		                                console.error('install fail...');  
		                            });  
		                        }  
		                    }  
		                });  
		            }  
		        }  
		    });  
		});  
		// #endif
	},

// user.vue
	// 监听获取缓存大小
	onStorageSize() {
		let res = uni.getStorageInfoSync()
		if(res.currentSize > 1024) {
				return (res.currentSize/1024).toFixed(2) + 'M'
			}
		else{
			return res.currentSize + 'K'
		}
	}
}