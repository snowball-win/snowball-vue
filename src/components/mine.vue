<template>
	<ul class="wrapper">
		<li class="head">
			<div>
				<router-link :to="{path:'/home'}" event="click" tag="span">设置</router-link>
			</div>
			<div>
				<div class="headImg">
					<img src="../assets/img/touxiang_xueqiu.jpg" alt="头像" />
				</div>
				<div>
					snowball<br /><small>超级会员</small>
					<span>颜值100分></span>
				</div>
			</div>
		</li>
		<li>
			<div>
				<span>1475</span><br /><span>收藏夹</span>
			</div>
			<div>
				<span>671</span><br /><span>关注店铺</span>
			</div>
			<div>
				<span>218</span><br /><span>足迹</span>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {}
</script>
<style lang="less">
	.wrapper {
		width: 100%;
		min-height: 30rem;
		font-size: 0.8rem;
		background: #f4f4f4;
		.head{
			background:#eb5379;
			height:5rem;
			padding: 0.2rem 0 0 0.2rem;
			div:nth-child(1){
				color: #FFFFFF;
				height: 2rem;
			}
			div:nth-child(2){
				div:nth-child(1){
					float: left;
				}
				div:nth-child(2){
					float: left;
					color: #FFFFFF;
					width: 13.3rem;
					span{
						display: inline-block;
						float: right;
						background: rgba(154,54,79,.6);
						font-size: 0.75rem;
						height: 1rem;
						line-height: 1rem;
						border-radius: 0.31rem;
						width: 5rem;
						text-align: center;
						margin-top: -20px;
					}
				}
			}
			.headImg {
				width: 2.5rem;
				height: 2.5rem;
				overflow: hidden;
				img{
					/*width: 100%;*/
					height: 100%;
				}
			}
		}
		li:nth-child(2){
			background: #FFFFFF;
			width: 100%;
			height: 3rem;
			div{
				float: left;
				width: 5.3rem;
				text-align: center;
				margin-top: 0.5rem;
			}
		}
	}

</style>