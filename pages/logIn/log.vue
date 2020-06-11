<template>
	<view class="log" v-show='isLog'>
		<view>
			<img :src="avator.headUrl"  v-if="isLog" />
			<view class="userName">{{avator.nickName}}</view>
			<view class="regAndLog"><a @click="logIn"> 登录 </a>
			</view>
		</view>
	</view>
</template>

<script>
	import {postuser} from '../../network/request.js'
	export default {
		computed:{
			avator(){
				console.log(this.$store.state.user.avatar)
				return this.$store.state.user
			}
		},
		data(){
			return {
				isLog:false,
				headUrl:'',
				nickName:'',
				openId:''
			}
		},
		methods:{
			logIn(){
				uni.request({
					url:'http://a386yu.natappfree.cc/jeecg-boot/AppApi/login',
					method:'POST',
					data:{
						nickname:this.nickName,
						openid:this.openId,
						headurl:this.headUrl
					},
					success:(data,statusCode,header)=>{
						console.log(data)
					}
				})
				
			},
			logWeb(){
				
				this.isLog =false
				postuser({
					nickName:this.nickName,
					openId:this.openId,
					headUrl:this.headUrl
				}).then(value =>{
					console.log(value)
				},reason=>{
					console.log(reason)
				})
				
				
				
			},
			log(){
				uni.login({
					success:(ress)=>{
						uni.getUserInfo({
							success:(value)=>{
								console.log('before',this.$store.state.user)
									  this.headUrl= value.userInfo.avatarUrl;				  
									  let res = ress.authResult;
									  value = value.userInfo;
									  let obj ={}
									  obj.accessToken = res.access_token;
									  obj.freshToken = res.refresh_token;
									  obj.avatar = value.avatarUrl;
									  obj.openId = value.openId;
									  obj.nickName  = value.nickName;
									  this.headUrl = value.avatarUrl;
									  this.nickName  =  value.nickName;
									  this.openId =  value.openId;
									  this.$store.commit('overwriteStatus',obj)
									  this.isLog = true;
							}
						})
						
					},
					fail:function(reason){
						
					}
				})
			}
		},
		created(){
				this.log()
		}
		,
		watch:{
			avatar:{}
		}
		
	}
</script>

<style>
	.log{
		width: 100%;
		height: 300rpx;
		background-color: white;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		
	}
	.log img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin: 10rpx auto;
		transform: translateX(25%);
	}
	.regAndLog{
		width: 100%;
		display: flex;
		
	}
	.regAndLog a{
		display: inline-block;
		width: 200rpx;
		height: 100rpx;
		border-radius: 1%;
		background-color: #4CD964;
		line-height: 100rpx;
		text-align: center;
	}
	.userName{
		width: 100%;
		text-align: center;
	}
</style>
