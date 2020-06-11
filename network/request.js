import axios from 'axios';
const BASEURL ='http://a386yu.natappfree.cc'
let request = axios.create({
		baseURL:BASEURL
})
export function getIndexList(){
	
	
	
}
export function postuser(obj){
	return request({
		url:'/jeecg-boot/AppApi/login',
		method:'post',
		data:{
			nickname:obj.nickName,
			headurl:obj.headUrl,
			openid:obj.openId
		}
		
	})
	
}