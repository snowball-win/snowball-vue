<template>
	<div class="hello">
		<ali-player @play="play" :isLive="aplayer.isLive" :source="aplayer.source" :vid="aplayer.vid" :autoplay="aplayer.autoplay" :x5_type="aplayer.x5_type" :x5_fullscreen="aplayer.x5_fullscreen" :useH5Prism="aplayer.useH5Prism" :skinLayout="aplayer.skinLayout" :playauth="aplayer.playauth" ref="player">
		</ali-player>
	</div>
</template>

<script>
	import VueAliplayer from 'vue-aliplayer'
	export default {
		data() {
			return {
				aplayer: {
					source: "http://static.smartisanos.cn/common/video/t1-ui.mp4", // 视频源
					vid: "8db6e5c7ff5f4257b41e2487ec61d592",
					autoplay: false, // 播放器是否自动播放，在移动端autoplay属性会失效
					isLive: true, // 播放内容是否为直播，直播时会禁止用户拖动进度条
					useH5Prism: true, // 指定使用H5播放器
					useFlashPrism: false, // 指定使用Flash播放器
					cover: 'http://cdnoss.youkouyang.com/cover.png', // 播放器默认封面图片
					x5_type: "h5", // 声明启用同层H5播放器
					x5_fullscreen: false, // 声明视频播放时是否进入到TBS的全屏模式
					skinLayout: [{
							name: "bigPlayButton",
							align: "blabs",
							x: "70",
							y: "150"
						},
						{
							name: "H5Loading",
							align: "cc"
						}
					],
					//播放权证
					playauth: "eyJTZWN1cml0eVRva2VuIjoiQ0FJUzN3SjFxNkZ0NUIyeWZTaklxYXIzQm8zVm9lZGlqNWU1YW12OGswY3hPYmREaDdEQXRqejJJSHBLZVhkdUFlQVhzL28wbW1oWjcvWVlsck1xRnNFYkZCMlpNcHNwc2M4Sm9GUCtKcExGc3QySjZyOEpqc1ZsMDRWdmxsMnBzdlhKYXNEVkVma3VFNVhFTWlJNS8wMGU2TC8rY2lyWVhEN0JHSmFWaUpsaFE4MEtWdzJqRjFSdkQ4dFhJUTBRazYxOUszemRaOW1nTGlidWkzdnhDa1J2MkhCaWptOHR4cW1qL015UTV4MzFpMXYweStCM3dZSHRPY3FjYThCOU1ZMVdUc3Uxdm9oemFyR1Q2Q3BaK2psTStxQVU2cWxZNG1YcnM5cUhFa0ZOd0JpWFNaMjJsT2RpTndoa2ZLTTNOcmRacGZ6bjc1MUN0L2ZVaXA3OHhtUW1YNGdYY1Z5R0ZOLzducFNVUmJ2M2I0eGxMZXVrQVJtWGpJRFRiS3VTbWhnL2ZIY1dPRGxOZjljY01YSnFBWFF1TUdxQWRQTDVwZ2lhTTFyOUVQYmRnZmhtaTRBSjVsSHA3TWVNR1YrRGVMeVF5aDBFSWFVN2EwNDR4ckRoRzVnS3NNUWFnQUY2Qzl6eHF3VmdsSEFzTTJXdm11cmk1bFFRUHlYMXdndmJ4Mk91d3BRQmF0SEYrdW8wUnNURzllb2tVZmRMS0lpbkxsYlIvKys1MzlXN3BQM0k0T3h3ZjZIV2FjQTZQZVM2ZmpWQnZhd3BWSE5oNHdYR20rYk8xdUdtTXRraEhiMkExOTZUbEtYT0I4ZStEZUZ5Q1VpcVlrb21KaXdhTytGa0cxOW55SlVBUHc9PSIsIkF1dGhJbmZvIjoie1wiQ2FsbGVyXCI6XCJiY0o0ZFJHRFdRTjJnTEFvTk9nbVpwS0FMNEIxSk55YmNxaThOWkZCOERvPVxcclxcblwiLFwiRXhwaXJlVGltZVwiOlwiMjAxNy0xMC0yNVQwNjo1Mzo0N1pcIixcIk1lZGlhSWRcIjpcIjhkYjZlNWM3ZmY1ZjQyNTdiNDFlMjQ4N2VjNjFkNTkyXCIsXCJTaWduYXR1cmVcIjpcIlFHNTcwTXlrQWxzN1pxS1dTd2ppVStseTJrQT1cIn0iLCJWaWRlb01ldGEiOnsiU3RhdHVzIjoiTm9ybWFsIiwiVmlkZW9JZCI6IjhkYjZlNWM3ZmY1ZjQyNTdiNDFlMjQ4N2VjNjFkNTkyIiwiVGl0bGUiOiJXZUNoYXRfMjAxNzEwMTYxNjMzMTkiLCJDb3ZlclVSTCI6Imh0dHA6Ly92b2QubHVvYm9iYi5jb20vc25hcHNob3QvOGRiNmU1YzdmZjVmNDI1N2I0MWUyNDg3ZWM2MWQ1OTIwMDAwMS5qcGciLCJEdXJhdGlvbiI6NDIwLjB9LCJBY2Nlc3NLZXlJZCI6IlNUUy5IaUJNN2FMOEM4VVJoTU13R2Q1OG9odWtUIiwiUGxheURvbWFpbiI6InZvZC5sdW9ib2JiLmNvbSIsIkFjY2Vzc0tleVNlY3JldCI6IkRoZVdWNmJEMVBvN2pQbXJ1TFRDc25kQTFCUE5VTmpOb29iRnVEWnRqaDNlIiwiUmVnaW9uIjoiY24tc2hhbmdoYWkiLCJDdXN0b21lcklkIjoxNTY2OTk1NzgxNzM2OTg3fQ=="
				},
				player: null
			};
		},
		components: {
			'ali-player': VueAliplayer
		},
		methods: {
			play: function() {
				const player = this.$refs.player.instance
				player && player.play()
			},
			pause: function() {
				const player = this.$refs.player.instance
				player && player.pause()
			},
			replay: function() {
				const player = this.$refs.player.instance
				player && player.replay()
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.prism-player {
		height: 700px;
	}
	
	.ali-player {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.prism-player {
		width: 100%!important;
		height: 100%!important;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.prism-controlbar {
		display: none!important;
	}
</style>
<style>
	.prism-big-play-btn {
		left: 40%!important;
		bottom: 30%!important;
	}
	
	.prism-player .prism-controlbar {
		z-index: -100!important;
	}
</style>
<!--https://www.npmjs.com/package/vue-aliplayer-->