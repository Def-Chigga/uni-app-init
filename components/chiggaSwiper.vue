<template>
	<swiper :style="{height:`${swiperHeight}rpx`}"
	indicator-dots autoplay circular
	indicator-active-color="#ffffff" @change="getCurrentIndex">
		<swiper-item v-for="(item,index) in swiperImgList" :key="index">
			<image class="w-100 animated" :class="swiperCurrentIndex === index ? 'swiper-animate' : ''" :src="item.imgUrl" mode="scaleToFill"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"chiggaSwiper",
		data() {
			return {
				swiperCurrentIndex: 0,
			}
		},
		props: {
			swiperHeight: {
				type: [Number,String],
				default: 380
			},
			swiperImgList: {
				type: Array,
				default:()=>[]
			}
		},
		methods: {
			// 添加动画
			getCurrentIndex(e) {
				this.swiperCurrentIndex = e.detail.current
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
