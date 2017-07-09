<template>
	<div>
		关于我
		<hr>
		<ul class="nav">
			<!--<router-link to="/about" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>-->
			<router-link :to="{name:'About'}" exact tag="li">
				<a>study</a>
			</router-link>
			<router-link :to="{name:'Work'}" tag="li">
				<a>work</a>
			</router-link>
			<router-link :to="{name:'Hobby'}" tag="li">
				<a>hobby</a>
			</router-link>
		</ul>
		<hr>

		<router-view></router-view>

	</div>
</template>

<script>
	export default {}
</script>
<style lang="less">
	.is-active {
		color: orange;
	}
	
	.nav {
		overflow: hidden;
		color: #FFFFFF;
		li {
			float: left;
			padding: 0 0.43rem;
			cursor: pointer;
			background: greenyellow;
			border-radius: 0.3rem;
			width: 2.34rem;
			a {
				text-align: center;
			}
		}
	}
</style>