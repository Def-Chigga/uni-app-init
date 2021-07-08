<template>
	<view class="login">
		<view class="login-top">
			<image class="login-bg" src="../../static/images/login/login-bg.png" mode="scaleToFill"></image>
			<view class="welcome">欢迎 !</view>
		</view>
		<view class="login-bottom">
			<image class="login-logo" src="../../static/images/login/login-logo.png" mode="scaleToFill"></image>
			<view class="login-title"> 北纬数据  管理系统</view>
			<button class="login-btn" type="default" @click="toLoginForm">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				
			}
		},
		methods:{
			toLoginForm() {
				uni.redirectTo({
					url: './login-form'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		position: fixed;
		.login-top{
			width: 100%;
			height: calc(var(--status-bar-height) + 832rpx);
			position: relative;
			.login-bg{
				width: 100%;
				height: 100%;
			}
			.welcome{
				font-size: 68rpx;
				font-weight: 500;
				line-height: 48px;
				color: #F9F9F9;
				@include posCenterXY;
			}
		}
		.login-bottom{
			width: 100%;
			height: 502rpx;
			text-align: center;
			.login-logo{
				width: 200rpx;
				height: 200rpx;
				position: relative;
				top: -100rpx;
			}
			.login-title{
				font-size: 28rpx;
				line-height: 40px;
				color: #8C9198;
				margin-bottom: 60rpx;
			}
			.login-btn{
				width: 248rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: $nld-app-color;
				border-radius: 8rpx;
				font-size: 32rpx;
				color: #F9F9F9;
			}
		}
	}
</style>
