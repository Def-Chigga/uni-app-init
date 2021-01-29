<script>
	export default {
		globalData: {
			// imgHttp: 'http://192.168.0.142:8888/api-admin/file/upload',
			// imgUrl: 'http://192.168.0.142:81/',
			// imgHttp: 'http://pdc.yn.cn:8899/api-admin/file/upload',
			// imgUrl: 'http://pdc.yn.cn:80/',
			// wsHttp: 'ws://192.168.0.142:8889/ws',
			// wsHttp: 'ws://pdc.yn.cn:8889/ws'
		},
		onLaunch: function() {
			// #ifdef APP-PLUS
			//设置2.4秒后主动关闭，最多设置6秒
			setTimeout(() => {
				plus.navigator.closeSplashscreen();
			}, 2400);
			// #endif
			console.log('App Launch')
			// 每次APP启动看token是否过期
			this.$storage('nld_login_token', null)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	uni-page {
		font-size: 20rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		color: #333333;
	}

	uni-page-body {
		height: 100%;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

	/*轮播图样式填充 */
	uni-swiper {
		width: 100%;
		height: 100%;

		swiper-item {
			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 轮播图指示器样式 */
	.uni-swiper-dots {
		.uni-swiper-dot {
			width: 8rpx;
			height: 8rpx;
			margin-right: 8rpx !important;
		}

		.uni-swiper-dot-active {
			width: 28rpx;
			height: 8rpx;
			border-radius: 4rpx;
		}
	}
</style>
