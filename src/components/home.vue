<template>
	<div style="height: 2000px;">
		<div class="search">
			<span>				
				<router-link :to="{path:'/select'}" event="focus" tag="input" placeholder="懂你想要的..."></router-link>
			</span>
		</div>

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
	import axios from "axios"
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
	Vue.use(ElementUI)
	let slideshow = [{
			id: 1,
			tip: 'vip',
			img: "../../static/imgs/xiaoqing.jpg",
			userName: "leo1",
			sex: '男',
			hobby: '写代码'
		},
		{
			id: 2,
			tip: 'vip',
			userName: "leo2",
			img: "../../static/imgs/xiaoqing1.jpg",
			sex: '男',
			hobby: '唱歌'
		},
		{
			id: 3,
			tip: 'common',
			userName: "leo3",
			img: "../../static/imgs/xiaoqing2.jpg",
			sex: '男',
			hobby: '读书'
		},
		{
			id: 3,
			tip: 'common',
			userName: "leo3",
			img: "../../static/imgs/xiaoqing3.jpg",
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
<style lang="less">
	.search{
		width: 100%;
		height: 1.5rem;
		background: #CCCCCC;
		padding: 0.2rem;
		span{
			display: inline-block;
			border:1px solid #333333;
			width: 95%;
			height: 1.2rem;
			margin-top: 0.12rem;
			overflow: hidden;
			border-radius: 0.3rem;
			input{
				background: pink;
				width: 100%;
				height: 1.2rem;
				border: none;
				text-indent: 1rem;
			}
		}
	}
	.block{
		img{
			display: inline-block;
			height: 7rem;
			width: 100%;
		}
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
	}
</style>