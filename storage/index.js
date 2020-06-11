import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const storage = new Vuex.Store({
	state:{
		 isLog:false,
		 user:{access_token:'',fresh_token:'',openId:'',headUrl:'',nickName:'',}
	},
	getters:{},
	actions:{},
	mutations:{
		changeLog(state,status)
		{
			state.isLog = status
		}
		,
		overwriteStatus(state,obj){
			state.user.access_token = obj.accessToken;
			state.user.fresh_token = obj.freshToken;
			state.user.headUrl = obj.avatar;
			state.user.nickName = obj.nickName;
			state.user.opendId = obj.openId;
		}
	}
})
export default storage