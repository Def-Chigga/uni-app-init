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
			console.log('App Launch')
			// 监听用户登录状态
			this.$util.onUserState();
			
			// 监听网络状态
			this.$util.onNetWorkState()
			
			// 热更新
			this.$util.onHotUpdate()
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
	/* 自定义样式库 */
	@import "./common/chigga.scss";
	
	/*页面公共css */
	page{
		height: 100%;
		font-size: 28rpx;
		font-weight: 400;
		font-family: PingFang SC, Microsoft YaHei;
		color: #333333;
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
