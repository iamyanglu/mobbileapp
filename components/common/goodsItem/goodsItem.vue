<template>
	<view class="goodsItem">
		<view>
			<img src="static/test/timg.jpg">
		</view>
			<view class="desc">
				<view class="title">
					<h3>{{title}}</h3><view class="weight">{{'净重'+weight+'g'}}</view>
				</view>
				<view>
					
					<view class="priceAndcount">
							<view class="price">￥
							<view class="discount"> {{price[0]}}</view>
							<view class="ordinary">{{price[1]}}</view>
							</view>
						<view class="amount">{{'销售'+amount[0]}}/{{'剩余'+amount[1]}}</view>
					</view>
				</view>
				
				<view class="submit">
					<a class="reduce" @click="reduce">-</a>
					<a class="input">{{count}}</a>
					<a class="add" @click="add">+</a>
					<view class="shopBtn">
					<img src="static/circle/semicircle.png">
					<a href="#" class="shop">立即购买</a>
					<img src="static/circle/semicircleRight.png">
					</view>
				</view>
			
			</view>
		
	</view>
</template>

<script>
	export default{
		 name: 'goodsItem',
		data(){
			return {
				count:0
			}
		},
		methods:{
			reduce(){
				if(this.count > 0)
				{
					this.count -=1
				}
			},
			add(){
				this.count+=1	
			}
		},
		 props:{
			 title:{
				 type:String,
				 default:'好吃的大枣'
			 },
			 weight:{
				 type:Number,
				 default:0
			 },
			 price:{
				 type:Array,
				 
			 },
			 amount:{
				 type:Array,
				
			 }
			 
		 }
	}
</script>

<style>
	 .goodsItem{
		 width: 90%;
		 display: flex;
		 height: 200rpx;
		 padding: 2rpx;
		 margin: 10rpx auto;
	
	 }
	  .goodsItem  .desc{
		  margin-left: 10rpx;
		  padding: 10rpx;
	  }
	 .goodsItem .title{
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
	 }
	 .goodsItem .weight{
		 color: #C8C7CC;
		 margin-left: 10rpx;
		 display: flex;
		 font-size: 20rpx;
	 }
	 .goodsItem img{
		 width: 100px;
		 height: 100px;
	 }
	 .discount{
		 font-size:60rpx;
		 color: red;
	 }
	
	 .goodsItem .submit{
		 display: flex;
	 }
	
	  .goodsItem .priceAndcount{
	  		display: flex;
	  		font-size: 28rpx;
			align-items: flex-end;
			 margin-bottom: 10rpx;
			justify-content: space-around;
	  }
	  .goodsItem .ordinary{
		  text-decoration: line-through;
	  }
	
	  .goodsItem .price{
		display: flex;
		 align-items: flex-end;
	}
	.goodsItem .amount
	{
	
		  display: flex;
		  margin-left: 20rpx;
		  
	}
	.showGoods .shopBtn{
		height: 60rpx;
		display: flex;
		margin-left: 10rpx;
	}
	.goodsItem .submit{
		display: flex;
		
	}
	.goodsItem .submit a{
		display: inline-block;
		
	}
	.reduce,.add,.input{
		line-height: 60rpx;
		text-align: center;
		font-size: 60rpx;
		color: white;
		width: 60rpx;
		height: 60rpx;	
	}
	.reduce{
		background-color: #FFCD3C;
	}
	.add{
		background-color: #FF2727;
	}
	.input{
		color: #808080;
	}
	.submit{
		
	}
	.shop{
		
		display: flex;
		line-height: 60rpx;
		color:white;
		font-size: 30rpx;
		text-decoration: none;
		top:0;
		background-color: #FF2727;
	}
	.submit img{
		width:auto;
		height:60rpx
	}
	
				  
</style>
