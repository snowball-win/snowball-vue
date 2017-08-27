<template>
	<div id="appNews">
		<view-box>
			<x-header 
				class="header"
				:left-options="{showBack:true,backText:'back'}" 
			>
				<div slot="left"></div>
				<div>雪球</div>
				<div slot="right">search</div>
			</x-header>
			<sc :lock-y="true">
				<tab class="tab">
					<tab-item selected>新闻</tab-item>
					<tab-item>国际</tab-item>
					<tab-item>美女</tab-item>
					<tab-item>汽车</tab-item>
					<tab-item>新闻</tab-item>
					<tab-item>国际</tab-item>
					<tab-item>美女</tab-item>
					<tab-item>汽车</tab-item>
				</tab>
			</sc>
			
			<scroller
				class="myScroller"
				:on-refresh="refresh"
				refresh-text="snowball"
				:on-infinite="infinite"
			>
				<swiper :list="swiperList,swiperIndex" :loop="true"></swiper>
				<marquee class="my-marquee">
					<marquee-item v-for="list in marqueeList" :key="list.typeid"><a :href="list.url">{{list.title}}</a></marquee-item>
				</marquee>
				<panel :list="dataList"></panel>
			</scroller>
			
		</view-box>
	</div>
</template>

<script>
	import {
		ViewBox,
		XHeader,
		Tabbar,
		TabbarItem,
		Tab,
		TabItem,
		Scroller as sc,
		Swiper,
		Marquee,
		MarqueeItem,
		Panel
	} from 'vux';

	export default {
		name: 'appNews',
		components: {
			ViewBox,
			XHeader,
			Tabbar,
			TabbarItem,
			Tab,
			TabItem,
			sc,
			Swiper,
			Marquee,
			MarqueeItem,
			Panel
		},
		data() {
			var dataList= []
				for(var i = 0; i < 10; i += 1) {
					dataList.push({
						src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
						title: '标题一',
						desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
						url: '/component/cell'
					})
				}
			return {
				swiperList: [],
				swiperIndex: 0,
				dataList: dataList,
				marqueeList:[]
			}
		},
		created(){
			//轮播图的数据
			this.$jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-9.html").then(data=>{
				console.log(data)
				this.swiperList = data.focus.filter(item=>{
					return item.addata === null;
				}).map(item =>{
					return{
						url:item.link,
						img:item.picInfo[0].url,
						desc:item.title
					}
				})
			}),
			//滚动新闻
			this.$jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-9.html").then(data=>{
				console.log(data)
				this.marqueeList = data.live.filter(item=>{
					return item.addata === null;
				}).map(item =>{
					return{
						url:item.link,
						title:item.title
					}
				})
			}),
			//新闻列表
			this.$jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-9.html").then(data=>{
				console.log(data)
				this.dataList = data.list.filter(item=>{
					return item.addata === null;
				}).map(item =>{
					return{
						src:item.picInfo[0].url,
						title:item.title,
						desc:item.digest,
						url:item.link,
					}
				})
			})
		},
		methods:{
			refresh(){
				console.log(1)
			},
			infinite(){
				console.log(2)
			}
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,
	body {
		#app{
			height:100%;
		}
		margin: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		#appNews {
			height: 100%;
	
			.header{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				z-index: 9;
			}
			.tab {
				width: 30rem;
				margin-top: 46px;
			}
			.myScroller{
				top: 90px;
			}
			.my-marquee {
				margin: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.weui-media-box__hd img{
				width: 102px;
				height: 78px;
			}
			.weui-media-box__hd{
				width: 102px;
			}
		}
	}
</style>