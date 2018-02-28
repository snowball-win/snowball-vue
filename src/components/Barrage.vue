<template>
	<div class="barrage">
		<div class="box">
			<ul>
				<li v-for="item in barrage">{{item}}</li>
			</ul>
		</div>
		<div class="input">
			<!--双向绑定this.input，this.input（之后把用户输入的内容）添加到数组中，循环数组展示弹幕内容-->
			<input type="text" v-model="input" placeholder="请发送弹幕...">
			<button @click="send">发送弹幕</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {
				barrage: [],
				input: '',
			}
		},
		methods: {
			send: function() {
				console.log(this.input)
				this.barrage.push(this.input);
			}
		}
	}
</script>
<!--这里使用less-->
<style lang="less">
	#app {}
	
	.barrage {
		width: 100%;
		position: absolute;
		top: 54%;
		left: 0;
		.box {
			width: 100%;
			height: 198px;
			ul li {
				list-style: none;
				height: 30px;
				line-height: 20px;
				text-align: left;
			}
		}
		.input button {
			width: 20%;
			height: 30px;
			margin-left: 5%;
		}
		.input input {
			width: 60%;
			height: 30px;
			text-indent: 15px;
		}
	}
</style>
<!--弹幕、聊天窗同样的逻辑-->