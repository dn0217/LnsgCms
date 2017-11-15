<template>
	<div class="ServerIndex">
		欢迎来到大年后台管理系统
		<UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
		<button @click="getUEContent()">获取内容</button>
	</div>
</template>

<script>
	import UE from './UE.vue'
	export default {
	  name: 'ServerIndex',
	  data () {
	    return {
	        defaultMsg: '这里是UE测试',
	        config: {
	          initialFrameWidth: 800,
	          initialFrameHeight: 350
	        }
	      }
	  },
	  
	  mounted () {
	  	
	  },

	  methods: {
	  	getUEContent() {
	        let content = this.$refs.ue.getUEContent();
	        console.log(content)
	    }
	  },

	  components: {
	  	UE
	  }

	  
	}
</script>

<style lang="scss" scoped>
	
</style>
