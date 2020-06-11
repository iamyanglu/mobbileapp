<template>
	<view class="content">		
		<view class="index_top">
			<img :src="imgUrl">
		</view>
		<show-goods :goodsList="goodsList"></show-goods>
		<log v-if='showLog'></log>
	</view>
</template>

<script>
import log from 'pages/logIn/log';
import showGoods from '../../components/showGoods/showGoods.vue';

	export default {

		data() {
			return {
				title: 'Hello',
				imgUrl:"http://img.xzaiyp.top/banner/banner1.png",
				showLog:true,
				goodsList:[{
					title:'金龙鱼花生油',
					amount:[100,2000],
					price:[200,1000],
					weight:200
				},
				{
					title:'金龙鱼花生油',
					amount:[100,2000],
					price:[200,1000],
					weight:200
				}]
			}
		},
		components:{
			log,
			showGoods
			
		},
		onLoad() {
			if(this.$store.state.isLog){
				showLog = false				
			}
			else{
				
			}

		},
		
		methods: {

		}
	}
</script>

<style>
	.content .index_top img{
		width: 100%;
	}
</style>
