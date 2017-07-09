<template>
	<div id="app">

		<div class="nav-box">
			<ul class="nav">
				<li>
					<router-link :to="{path:'/home'}" event="mouseover" tag="span">首页</router-link>
				</li>
				<li>
					<router-link :to="{path:'/document'}" event="mouseover" tag="span">读书</router-link>
				</li>
				<li>
					<router-link to="/about" event="mouseover" tag="span">消息</router-link>
				</li>
				<li>
					<router-link to="/user" event="mouseover" tag="span">购物</router-link>
				</li>
				<li>
					<router-link to="/mine" event="mouseover" tag="span">我的</router-link>
				</li>
			</ul>
		</div>

		<router-view name="slider"></router-view>

		<router-view class="center"></router-view>

	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				index: '/home'
			}
		}
	}
</script>

<style lang="less">
	.is-active {
		color: orange;
	}
	
	.nav-box {
		background: #eff4f8;
		padding: 0px 0rem;
		position: fixed;
		bottom: 0;
		left: 0;
		.nav {
			overflow: hidden;
			color: #FFFFFF;
			li {
				float: left;
				padding: 0 0.43rem;
				cursor: pointer;
				background: pink;
				border-radius: 0.3rem;
				width: 2.34rem;
				a {
					text-align: center;
				}
			}
		}
	}
</style>