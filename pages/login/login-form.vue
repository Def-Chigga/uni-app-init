<template>
	<view class="login-form">
		<h3>我的账号</h3>
		<view class="login-container">
			<image class="avatar" src="../../static/images/login/login-user.png" mode="scaleToFill"></image>
			<view class="login-username">
				<image src="../../static/images/login/login-icon-username.png" mode="scaleToFill"></image>
				<uni-easyinput v-model="loginForm.username" :inputBorder="false" placeholder="请输入账号" maxlength="20" placeholderStyle="
				font-size: 28rpx;
				font-weight: bold;
				line-height: 40rpx;
				color: #BDC4CE;"/>
			</view>
			<view class="login-switch">
				<switch checked="true" color="#4C92FF" style="transform: scale(.6);" @change="" />
			</view>
			<div class="login-password">
				<image src="../../static/images/login/login-icon-password.png" mode="scaleToFill"></image>
				<uni-easyinput  type="password"  v-model="loginForm.password" :inputBorder="false" placeholder="请输入密码" maxlength="20" placeholderStyle="
				font-size: 28rpx;
				font-weight: bold;
				line-height: 40rpx;
				color: #BDC4CE;"/>
			</div>
			<button class="login-btn" type="default" @click="doLogin">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				loginForm: {
					username: '',
					password: ''
				}
			}
		},
		methods:{
			doLogin() {
				// 登录非空校验
				/* if(!this.loginForm.username.trim() || !this.loginForm.password.trim()) {
					return uni.showToast({
						title: '账号或密码不能为空！',
						icon: 'none'
					});
				} */
				// 调用登录接口
				uni.switchTab({
					url: '../platform/platform'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-form{
		width: 100%;
		height: 100%;
		position: fixed;
		text-align: center;
		h3{
			font-size: 44rpx;
			line-height: 60rpx;
			color: $nld-app-color;
			padding-top: calc(var(--status-bar-height) + 140rpx);
			margin-bottom: 140rpx;
		}
		.login-container{
			width: 630rpx;
			height: 690rpx;
			margin: 0 auto;
			background: #FFFFFF;
			border-radius: 8rpx;
			padding: 0 60rpx;
			box-sizing: border-box;
			position: relative;
			.avatar{
				width: 136rpx;
				height: 136rpx;
				position: relative;
				top: -68rpx;
			}
			.login-username,.login-password{
				width: 510rpx;
				height: 56rpx;
				line-height: 56rpx;
				position: relative;
				.uni-easyinput{
					width: 100%;
					height: 100%;
					@include flexRow;
					border-bottom: 1px solid #BDC4CE;
					padding-left: 86rpx;
					box-sizing: border-box;
				}
				image{
					width: 56rpx;
					height: 56rpx;
					position: absolute;
					left: 0;
				}
			}
			.login-switch{
				margin: 40rpx 0 32rpx 0;
				text-align: right;
			}
			.login-btn{
				position: absolute;
				bottom: 48rpx;
				width: 510rpx;
				height: 100rpx;
				line-height: 100rpx;
				background: $nld-app-color;
				border-radius: 8rpx;
				font-size: 34rpx;
				color: #F9F9F9;
			}
		}
	}
</style>
