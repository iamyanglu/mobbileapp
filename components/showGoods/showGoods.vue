<template>
	<view class="showGoods">
	
			<goods-item v-for="(item,index) in goodsList" :key='index'
			:title="item.title" :amount="item.amount"  :weight="item.weiht"
			:price="item.price"
			></goods-item>
	</view>
</template>

<script>
	import goodsItem from 'components/common/goodsItem/goodsItem'
	export default{
		name:'showGoods',
		props:['goodsList'],
		components:{
			goodsItem
		}
	}
</script>

<style>
	.showGoods{
		width: 100%;
		height: 400rpx;
	}
</style>
