<template>
	<view class="platform">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="platform-header">
			<view class="header-left">
				<image src="../../static/images/platform/platform-header-logo.png" mode="scaleToFill"></image>
				<text>云南北纬数据技术有限公司</text>
			</view>
			<view class="header-right">
				<image src="../../static/images/platform/platform-header-icon-msg.png" mode="scaleToFill"></image>
				<text>消息</text>
				<view class="badge">13</view>
			</view>
		</view>
		<view class="platform-content">
			<view class="platform-container">
					<view class="platform-banner">
						<swiper indicator-dots autoplay :interval="3000" :duration="1000" indicator-color="rgba(255, 255, 255, .5)" indicator-active-color="#fff"
						>
							<swiper-item>
								<view class="swiper-item">
									<image src="../../static/images/login/login-bg.png" mode="scaleToFill"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item">
									<image src="../../static/images/login/login-bg.png" mode="scaleToFill"></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item">
									<image src="../../static/images/login/login-bg.png" mode="scaleToFill"></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
					<view class="platform-announce">
						<view class="announce-container">
							<view class="title">公告</view>
							<view class="content">项目管理系统2021年5月20日正式启动!</view>
							<image src="../../static/images/platform/platform-announce-icon-arrow-right.png" mode="scaleToFill"></image>
						</view>
					</view>
					<view class="platform-manage">
						<view class="manage-list" v-for="(item,index) in manageList" :key="index">
							<view class="manage-top">{{item.title}}</view>
							<view class="manage-item-list">
								<view class="list-item" v-for="(subItem,index) in item.list" :key="index">
									<view class="img">
										<image :src="subItem.imgUrl" mode="scaleToFill"></image>
										<view class="badge">13</view>
									</view>
									<text>{{subItem.name}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="platform-footer">
						<view class="footer-top">
							<image src="../../static/images/platform/platform-footer-logo.png" mode="scaleToFill"></image>
							<text>北纬数据</text>
						</view>
						<view class="footer-bottom">
							云南北纬数据技术有限公司
						</view>
					</view>
				</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				manageList: [
					{
						title: '内部管理',
						list: [
							{
								name: '打卡',
								imgUrl: '../../static/images/platform/platform-in-icon1.png',
								path: ''
							},
							{
								name: '审批',
								imgUrl: '../../static/images/platform/platform-in-icon2.png',
								path: ''
							},
							{
								name: '公告',
								imgUrl: '../../static/images/platform/platform-in-icon3.png',
								path: ''
							},
							{
								name: '汇报',
								imgUrl: '../../static/images/platform/platform-in-icon4.png',
								path: ''
							},
							{
								name: '健康上报',
								imgUrl: '../../static/images/platform/platform-in-icon5.png',
								path: ''
							},
						]
					},
					{
						title: '外部管理',
						list: [
							{
								name: '规章制度',
								imgUrl: '../../static/images/platform/platform-out-icon1.png',
								path: ''
							},
							{
								name: '文档',
								imgUrl: '../../static/images/platform/platform-out-icon2.png',
								path: ''
							},
							{
								name: '素材库',
								imgUrl: '../../static/images/platform/platform-out-icon3.png',
								path: ''
							},
							{
								name: 'KPI',
								imgUrl: '../../static/images/platform/platform-out-icon4.png',
								path: ''
							}
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.platform{
		width: 100%;
		background: #F2F4F8;
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: $nld-app-color;
			position: fixed;
			z-index: 998;
		}
		.platform-header{
			width: 100%;
			height: 88rpx;
			background-color: $nld-app-color;
			padding: 0 20rpx;
			box-sizing: border-box;
			@include flexSb;
			position: fixed;
			left: 0;
			top: var(--status-bar-height);
			z-index: 998;
			.header-left{
				@include flexRow;
				image{
					width: 52rpx;
					height: 34rpx;
					margin-right: 16rpx;
				}
				text{
					font-size: 32rpx;
					line-height: 44rpx;
					color: #FFFFFF;
				}
			}
			.header-right{
				position: relative;
				@include flexCol;
				image{
					width: 40rpx;
					height: 40rpx;
				}
				text{
					font-size: 18rpx;
					line-height: 26rpx;
					color: #FFFFFF;
				}
			}
		}
		.badge{
			width: 36rpx;
			height: 24rpx;
			background: #FDAD22;
			border-radius: 84rpx;
			text-align: center;
			font-size: 20rpx;
			font-family: Futura;
			line-height: 28rpx;
			color: #FFFFFF;
			position: absolute;
			top: 0;
			right: -15rpx;
		}
		.platform-content{
			width: 100%;
			position: absolute;
			padding: 20rpx;
			padding-top: calc(var(--status-bar-height) + 88rpx + 20rpx);
			box-sizing: border-box;
			.platform-container{
					width: 100%;
					/* #ifdef H5 */
					padding-bottom: 50px;
					/* #endif */
					.platform-banner{
						width: 100%;
						height: 320rpx;
						border-radius: 8rpx;
						.swiper-item{
							width: 100%;
							height: 100%;
						}
						/deep/ .uni-swiper-wrapper{
							.uni-swiper-dots{
								display: flex;
								align-items: center;
							}
							.uni-swiper-dot{
								width: 12rpx;
								height: 12rpx;
							}
							.uni-swiper-dot-active{
								width: 16rpx;
								height: 16rpx;
								border-radius: 50%;
							}
						}
					}
					.platform-announce{
						width: 100%;
						height: 80rpx;
						background: #FFFFFF;
						border-radius: 8rpx;
						margin: 20rpx 0;
						.announce-container{
							height: 100%;
							padding: 0 40rpx;
							box-sizing: border-box;
							@include flexRow;
							.title{
								width: 88rpx;
								height: 40rpx;
								line-height: 44rpx;
								text-align: center;
								background: url(../../static/images/platform/platform-announce-bg.png) no-repeat center center;
								background-size: cover;
								font-size: 22rpx;
								font-weight: 500;
								color: #FFFFFF;
							}
							.content{
								width: 490rpx;
								font-size: 28rpx;
								line-height: 40rpx;
								color: #5B5E63;
								margin-left: 16rpx;
								margin-right: 22rpx;
								@include clampN(1);
							}
							image{
								width: 15rpx;
								height: 24rpx;
							}
						}
					}
					.platform-manage{
						.manage-list{
							height: 468rpx;
							background: #FFFFFF;
							border-radius: 8rpx;
							margin-bottom: 20rpx;
							.manage-top{
								height: 62rpx;
								line-height: 62rpx;
								font-size: 24rpx;
								color: #8C9198;
								padding-left: 14rpx;
								border-bottom: 2rpx solid #EBEDF0;
								box-sizing: border-box;
							}
							.manage-item-list{
								height: 406rpx;
								padding: 23rpx 40rpx;
								box-sizing: border-box;
								@include flexRow;
								flex-wrap: wrap;
								.list-item{
									width: 160rpx;
									height: 160rpx;
									@include flexColCenter;
									margin-left: 37rpx;
									margin-right: 37rpx;
									margin-bottom: 10rpx;
									&:nth-child(3n + 1){
										margin-left: 0;
									}
									&:nth-child(3n){
										margin-right: 0;
									}
									&:nth-last-child(1){
										margin-bottom: 0;
									}
									&:nth-last-child(2){
										margin-bottom: 0;
									}
									.img{
										position: relative;
										image{
											width: 64rpx;
											height: 64rpx;
											margin-bottom: 20rpx;
										}
										.badge{
											    top: -5px;
											    right: -11px;
										}
									}
								}
							}
							&:last-of-type{
								margin-bottom: 80rpx;
							}
						}
					}
					.platform-footer{
						text-align: center;
						margin-bottom: 42rpx;
						.footer-top{
							@include flexRowCenter;
							image{
								width: 28rpx;
								height: 28rpx;
								margin-right: 8rpx;
							}
							text{
								font-size: 28rpx;
								line-height: 40rpx;
								color: #5B5E63;
							}
						}
						.footer-bottom{
							font-size: 24rpx;
							line-height: 34rpx;
							color: #8C9198;
						}
					}
				}
			
		}
	}
</style>
