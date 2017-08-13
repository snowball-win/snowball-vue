<template>
	<div id="appNews">
		<view-box>
			<x-header
				:left-options="{showBack:false,backText:'back'}"
			>
				<div slot="left">snowball</div>
				<div>雪球</div>
				<div slot="right">search</div>
			</x-header>			
			<div style="height: 187.5rem;background: #FFA500;">
				
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
	import {ViewBox,XHeader,Tabbar,TabbarItem} from 'vux';

	export default {
		components:{
			ViewBox,
			XHeader,
			Tabbar,
			TabbarItem
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,body{
		margin: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
	#appNews{
		height: 100%;
	}
</style>