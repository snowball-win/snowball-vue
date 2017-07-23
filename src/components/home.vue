<template>
	<div style="height: 2000px;">
		欢迎来到首页
		<!--<div class="searchIpt">
			<select-input is-show.sync="listShow">1</select-input>
			<list v-show="listShow" :data="listData">1</list>
		</div>-->
		<div class="block">
			<el-carousel height="150px">
				<el-carousel-item v-for="item in slideshow" :key="item.index">
					<router-link exact :to="{path:'articleDetails',query:{privacy:'privacy'}}" tag="div">
						<img :src="item.img" />
					</router-link>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
//	import aelectInput from '@/components/selectInput'
//	import list from '@/components/list'
	Vue.use(ElementUI)
	let slideshow = [{
			id: 1,
			tip: 'vip',
			img: "../../static/imgs/logo.png",
			userName: "leo1",
			sex: '男',
			hobby: '写代码'
		},
		{
			id: 2,
			tip: 'vip',
			userName: "leo2",
			img: "../../static/imgs/logo.png",
			sex: '男',
			hobby: '唱歌'
		},
		{
			id: 3,
			tip: 'common',
			userName: "leo3",
			img: "../../static/imgs/logo.png",
			sex: '男',
			hobby: '读书'
		},
		{
			id: 3,
			tip: 'common',
			userName: "leo3",
			img: "../../static/imgs/logo.png",
			sex: '男',
			hobby: '读书'
		}
	]
	export default {
		data() {
			return {
				slideshow: slideshow
			}
		}
	}
</script>
<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		/*line-height: 150px;*/
		margin: 0;
		text-align: center;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>