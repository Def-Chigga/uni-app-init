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
	/*清空默认的样式*/
	html{color:#000;background:#F9F9F9}
	body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
	table{border-collapse:collapse;border-spacing:0}
	fieldset,img{border:0}
	address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
	ol,ul{list-style:none}
	caption,th{text-align:left}
	h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
	q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}
	sup{vertical-align:text-top}
	sub{vertical-align:text-bottom}
	input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}
	legend{color:#000}#yui3-css-stamp.cssreset{display:none}
	a{text-decoration: none; color: #999}
	
	/*每个页面公共css */
	uni-page {
		font-size: 28rpx;
		font-weight: 400;
		font-family: PingFang SC, Microsoft YaHei;
		color: #333333;
		background: #F9F9F9;
	}

	uni-page-wrapper{
		height: 100%;
		background: #F9F9F9;
	}
	uni-page-body {
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
