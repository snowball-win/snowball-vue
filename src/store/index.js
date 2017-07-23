import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//定义一个容器
let store = new Vuex.Store({
	state:{
		count:100
	},
	getters:{
		filterCount(state){
			return state.count>=120?120:state.count
		}
	},
	mutations:{
		addIncrement(state,payload){
			state.count += payload.n;
//			setTimeout(()=>{
//				state.count += payload.n;
//			},1000)
		},
		deIncrement(state,payload){
			state.count -= payload.de;
		}
	},
	actions:{
		addAction(context){
			console.log(context)
			setTimeout(()=>{
				//改变状态，提交mutation，异步时候用actions
				context.commit("addIncrement",{n:5})
				context.dispatch("textAction",{test:"测试"})
			},100)
		},
		textAction(context,obj){
			console.log("我被触发了")
			console.log(obj)
		}
	}
})
export default store