<template>
	<div style="height: 2000px;">
		<div class="search">
			<span>				
				<router-link :to="{path:'/select'}" event="focus" tag="input" placeholder="hello world..."></router-link>
			</span>
		</div>

		<div class="block">
			<el-carousel height="150px">
				<el-carousel-item v-for="item in slideshow" :key="item.index">
					<!--<router-link exact :to="{path:'articleDetails',query:{privacy:'privacy'}}" tag="div">
						<img :src="item.img" />
					</router-link>-->
					<a :href="item.href">
						<img :src="item.img" />
					</a>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div>hello...</div>
		<div class="picWall">
			<img src="../../static/imgs/fengjing1.jpg"/>
			<img src="../../static/imgs/fengjing2.jpg"/>
			<img src="../../static/imgs/fengjing3.jpg"/>
			<img src="../../static/imgs/fengjing4.jpg"/>
			<img src="../../static/imgs/fengjing5.jpg"/>
			<img src="../../static/imgs/fengjing6.jpg"/>
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
			img: "../../static/imgs/banner1.png",
			userName: "leo1",
			sex: '男',
			hobby: '写代码',
			href:'https://www.baidu.com/'
		},
		{
			id: 2,
			tip: 'vip',
			userName: "leo2",
			img: "../../static/imgs/banner2.jpg",
			sex: '男',
			hobby: '唱歌',
			href:'http://www.ifeng.com/'
		},
		{
			id: 3,
			tip: 'common',
			userName: "leo3",
			img: "../../static/imgs/fengjing3.jpg",
			sex: '男',
			hobby: '读书',
			href:'https://www.taobao.com/'
		},
		{
			id: 3,
			tip: 'common',
			userName: "leo3",
			img: "../../static/imgs/fengjing4.jpg",
			sex: '男',
			hobby: '读书',
			href:'https://segmentfault.com/'
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
	.picWall img{
		width: 100%;
	}
</style>