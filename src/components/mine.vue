<template>
	<ul class="wrapper">
		<li class="head">
			<div>
				<router-link :to="{path:'/home'}" event="click" tag="span">设置</router-link>
			</div>
			<div>
				<router-link exact :to="{path:'articleDetails',query:{privacy:'privacy'}}" tag="div" class="headImg">
					<img src="../assets/img/touxiang_xueqiu.jpg" alt="头像" />
				</router-link>
				<div>
					snowball<br /><small>超级会员</small>
					<span>
						{{city}}
					</span>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="height: 1rem;">
							<circle cx="11" cy="11" r="10" stroke="red" stroke-width="2" fill="pink" />
							<circle cx="11" cy="11" r="3" stroke="red" stroke-width="2" fill="pink" />
							<!--<line x1="1" y1="10" x2="11" y2="30" stroke="red" stroke-width="2" />-->
							<!--<line x1="21" y1="10" x2="11" y2="30" stroke="red" stroke-width="2" />-->
						</svg>
					</span>
				</div>
			</div>
		</li>
		<li>
			<div  v-for="item,index in favorites">
				<span>{{item.num}}</span><br /><span>{{item.name}}</span>
			</div>
		</li>
		<li>
			<div v-for="item,index in hobby">
				<span><img src="../assets/img/touxiang_xueqiu.jpg"/></span><span>{{item.name}}</span>
			</div>
		</li>
	</ul>
</template>

<script>
	import axios from "axios"
	export default {
		name: "mainCollect",
		data() {
			return {
				favorites:"",
				hobby:"",
				city:"1"
			}
		},
		created() {
			axios({
				method: "get",
				url: "http://easy-mock.com/mock/5961e5339adc231f357c21bc/snowball/collect",
			}).then((response) => {
				this.favorites = response.data.data;
			}).catch((error) => {
				console.log(error)
			}),
			axios({
				method: "get",
				url: "http://easy-mock.com/mock/5961e5339adc231f357c21bc/snowball/hobby",
			}).then((response) => {
				this.hobby = response.data.hobby;
				console.log(this.$route)
			}).catch((error) => {
				console.log(error)
			}),
			axios({
				method: "get",
				url: "http://restapi.amap.com/v3/ip?key=4fc1f8855c287111b75bba807f042c83",
			}).then((response) => {
				this.city = response.data.city;
				console.log(response.data.city)
			}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>
<style lang="less">
	.wrapper {
		width: 100%;
		min-height: 30rem;
		font-size: 0.8rem;
		background: #f4f4f4;
		.head {
			background: #eb5379;
			height: 5rem;
			padding: 0.2rem 0 0 0.2rem;
			div:nth-child(1) {
				color: #FFFFFF;
				height: 2rem;
			}
			div:nth-child(2) {
				div:nth-child(1) {
					float: left;
				}
				div:nth-child(2) {
					float: left;
					color: #FFFFFF;
					width: 13.3rem;
					span:nth-child(3) {
						display: inline-block;
						float: right;
						background: rgba(154, 54, 79, .6);
						font-size: 0.75rem;
						height: 1rem;
						line-height: 1rem;
						border-radius: 0.31rem;
						width: 3rem;
						text-align: center;
						margin-top: -20px;
						img{
							width: 0.75rem;
							height: 0.75rem;
							margin-top: -0.15rem;
							display: inline-block;
							vertical-align: middle;
						}
					}
					span:nth-child(4){
						float: right;
						width: 1rem;
						margin-top: -20px;
					}
				}
			}
			.headImg {
				width: 2.5rem;
				height: 2.5rem;
				overflow: hidden;
				img {
					/*width: 100%;*/
					height: 100%;
				}
			}
		}
		li:nth-child(2) {
			background: #FFFFFF;
			width: 100%;
			height: 3rem;
			div {
				float: left;
				width: 5.3rem;
				text-align: center;
				margin-top: 0.5rem;
			}
		}
		li:nth-child(3){
			background: #FFFFFF;
			margin-top: 0.5rem;
			padding: 0.7rem 0;
			width: 100%;
			height: 3rem;
			div{
				width: 4rem;
				float: left;
				span:nth-child(1){
					display: block;
					width: 1.87rem;
					margin:0 auto;
					img{
						width: 100%;
						height: 100%;
					}
				}
				span:nth-child(2){
					display: block;
					width: 100%;
					text-align: center;
				}
			}
		}
	}
</style>