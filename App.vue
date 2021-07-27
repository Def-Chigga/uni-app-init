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
	/* 官方css库 */
	@import "./common/uni.css";
	/* 项目初始化 */
	@import "./common/reset.css";
	/* 自定义图标库 */
	@import "./common/icon.css";
	/* 动画库 */
	@import "./common/animate.css";
	/* 混合方法样式 */
	@import "./common/mixin.scss";
	/* 自定义样式库 */
	@import "./common/chigga.scss";
	
	/*每个页面公共css */
	uni-page {
		width: 100%;
		font-size: 28rpx;
		font-weight: 400;
		font-family: PingFang SC, Microsoft YaHei;
		color: #333333;
		background: #F9F9F9;
	}

	uni-page-wrapper{
		width: 100%;
		height: 100%;
		background: #F9F9F9;
	}
	uni-page-body {
		width: 100%;
		height: 100%;
		background: #F9F9F9;
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
