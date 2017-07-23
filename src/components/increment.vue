<template>
	<div>
		<h2>xuex简易加法计算器</h2>
		<div>
			<input type="button" value="-" @click="deHandle({de:5})" />
			<span>{{count}}</span>
			<input type="button" value="+"  @click="addHandle" />
			<p>{{num2}}</p>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default{
//		computed:mapState({
//			num:'count'
//			num:state=>state.count
//			num(state){
//				return state.count+100
//			}
//			count:'count'
//		})
		computed:{
//			abc(){
//				return 123
//			},
			...mapGetters({
				num2:'filterCount'
			}),
			...mapState(['count'])
		}
//		{
//			num(){
//				return this.$store.state.count
//			},
//			num2(){
//				return this.$store.getters.filterCount
//			}
//		}
		,
		methods:{
			...mapActions({
				addHandle:'addAction'
			}),
			...mapMutations({
				deHandle:'deIncrement'
			})
//			addHandle(){
				//点击改变状态，提交mutation addIncrement
//				this.$store.commit("addIncrement",5)
				//异步操作触发actions
//				this.$store.dispatch("addAction")
//			},
//			deHandle(){
//				this.$store.commit("deIncrement")
//				this.$store.commit({
//					type:'deIncrement',
//					de:5
//				})
//			}
		}
	}
</script>

<style>
</style>