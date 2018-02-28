<template>
	<div id="app">

		<div class="nav-box">
			<ul class="nav">
				<li>
					<!--<i class="fa fa-home"></i>-->
					<router-link :to="{path:'/home'}" event="click" tag="span">首页</router-link>
				</li>
				<li>
					<router-link :to="{path:'/document'}" event="click" tag="span">读书</router-link>
				</li>
				<li>
					<router-link to="/about" event="click" tag="span">消息</router-link>
				</li>
				<li>
					<router-link to="/user" event="click" tag="span">购物</router-link>
				</li>
				<li>
					<router-link to="/mine" event="click" tag="span">我的</router-link>
				</li>
			</ul>
			<div @click="backTop()" class="backTop"></div>
		</div>

		<router-view name="slider"></router-view>

		<router-view class="center"></router-view>

	</div>
</template>

<script>
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
	Vue.use(ElementUI)
	export default {
		name: 'app',
		data() {
			return {
				index: '/home'
			}
		},
		methods:{
			backTop(){
				var Tween = {
					Linear: function(t, b, c, d) { //匀速
					    return c * t / d + b; 
					}
				}
				Math.tween = Tween;
				var t = 1;
                const b = document.body.scrollTop;
                const c = 100;
                const d = 10;
                const setInt = setInterval(()=>{
                    t--;
                    console.log(t)
                    if(document.body.scrollTop == 0){clearInterval(setInt)}
                    console.log(t);
                    const backTop = Tween.Linear(t,b,c,d);
                     console.log(backTop);
                    document.body.scrollTop = backTop;
                },20)
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
		z-index: 4;
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
	.backTop{
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid #CCCCCC;
		position: fixed;
		right: 1rem;
		bottom: 2rem;
		border-radius: 50%;
		background: url(/static/imgs/backtop20180226.png) no-repeat 40%;
		background-size: 70% 100%;
	}
</style>