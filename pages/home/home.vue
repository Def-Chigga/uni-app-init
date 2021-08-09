<template>
	<view class="home mh-100">
		<!-- 状态栏 -->
		<view class="status_bar"></view>
		<!-- 搜索栏 -->
		<view class="search pt-status_bar">
			<uni-search-bar class="p-2" v-model="searchVal" placeholder="搜索你想听的节目" @confirm="handleConfirm" @clear="handleClearOrCancel" @cancel="handleClearOrCancel" />
		</view>
		<!-- 内容区域 -->
		<view class="pt-status_bar-search p-2">
			<!-- 轮播图 -->
			<chigga-swiper :swiperHeight="380" :swiperImgList="swiperImgList"></chigga-swiper>
		</view>
	</view>
</template>

<script>
	import chiggaSwiper from '@/components/chiggaSwiper.vue';
	export default {
		components: {
			chiggaSwiper
		},
		data() {
			return {
				searchVal: '',
				swiperImgList: [
					{
						imgUrl: '/static/images/swiperImages/swipertab1.png'
					},
					{
						imgUrl: '/static/images/swiperImages/swipertab2.png'
					},
					{
						imgUrl: '/static/images/swiperImages/swipertab3.png'
					},
					{
						imgUrl: '/static/images/swiperImages/swipertab4.png'
					},
				]
			};
		},
		methods: {
			// 处理搜索框
			handleConfirm(e) {
				this.searchVal = e.value;
			},
			handleClearOrCancel(e) {
				this.searchVal = '';
			},
		},
	}
</script>

<style lang="scss" scoped>
	.home{
		.search{
			opacity: 0.8;
		}
	}
</style>
