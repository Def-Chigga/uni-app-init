<template>
	<view class="login" @click="toHome">login</view>
</template>

<script>
	export default {
		data() {
			return{
				
			}
		},
		methods:{
			toHome() {
				console.log(1);
				uni.switchTab({
					url: '../home/home'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
