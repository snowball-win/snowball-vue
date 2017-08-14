<template>
	<div id="appNews">
		<view-box>
			<x-header :left-options="{showBack:true,backText:'back'}">
				<div slot="left"></div>
				<div>雪球</div>
				<div slot="right">search</div>
			</x-header>
			<scroller :lock-y="true">
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
			</scroller>
			<swiper :list="swiperList,swiperIndex" :loop="true"></swiper>
			<marquee class="my-marquee">
				<marquee-item>111</marquee-item>
				<marquee-item>222</marquee-item>
			</marquee>

			<div style="height: 187.5rem;background: #FFA500;">
				<panel :list="dataList"></panel>
			</div>

			<!--<tabbar>
				<TabbarItem>
					<span slot="label">111</span>
				</TabbarItem>
				<TabbarItem>
					<span slot="label">111</span>
				</TabbarItem>
				<TabbarItem>
					<span slot="label">111</span>
				</TabbarItem>
			</tabbar>-->
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
		Scroller,
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
			Scroller,
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
				swiperList: [{
					url: 'javascript:',
					img: 'https://static.vux.li/demo/1.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://static.vux.li/demo/2.jpg',
					title: '送你一辆车'
				}, {
					url: 'javascript:',
					img: 'https://static.vux.li/demo/3.jpg',
					title: '送你一次旅行'
				}],
				swiperIndex: 0,
				dataList: dataList
			}
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,
	body {
		margin: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		#appNews {
			height: 100%;
			.tab {
				width: 30rem;
			}
			.my-marquee {
				margin: 10px;
			}
		}
	}
</style>