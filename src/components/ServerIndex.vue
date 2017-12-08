<template>
	<div class="cmsIndex" v-if="isLogin">
		<div class="acticleInfo">
			<input type="text" placeholder="作者" v-model="author">
			<input type="text" placeholder="文章标题" v-model="acticleTitle">
			<select name="" id="" id="test">
				<option value="1">前端</option>
				<option value="2">服务端</option>
				<option value="3">杂谈</option>
			</select>
		</div>
		<div class="ServerIndex">
			<UE  :config=config ref="ue"></UE>
		</div>
		<span class="fb" @click="fb()">发布文章</span>
	</div>
</template>

<script>
import UE from './UE.vue'
import { mapGetters } from 'vuex'
export default {
  	data () {
    	return {
	      	config: {
		    	initialFrameWidth: 1080,
		    	initialFrameHeight: 550
			},
			author:'',
			acticleTitle:''
   		}
    },

	created () {
		var isTrue = localStorage.getItem('login')
		if( eval(isTrue) ){
			this.$store.dispatch('isLogin', true);
		}
	},
	
	methods: {
		fb(){
			let content = this.$refs.ue.getUEContent();
			let myselect = document.getElementById('test');
			let index = myselect.selectedIndex; 
			let time = new Date().getTime();

			let data = {
				author: this.author,
				title: this.acticleTitle,
				content: content,
				type: myselect.options[index].value,
				time: time,
				note: content
			}
			
			this.api.addActicle(data).then(res => {
				console.log(res)
			})
		}
	},

	computed: {
    	...mapGetters([
      		'isLogin'
    	])
  	},


	components: {
	  	UE
	}
}
</script>


<style lang="scss" scoped>
	.cmsIndex{
		position: relative;
	}
	.acticleInfo{
		width: 100%;
		margin:20px 0;
		input{
			width:200px;
			height:35px;
			border:1px solid #000;
			margin-right: 20px;
		}
		select{
			width: 100px;
			height: 35px;
			outline: none;
		}
	}
	.fb{
		position: absolute;
		left:50%;
		bottom: -100px;
		transform:translate(-50%, 0);
		padding:20px;
		background: #f00;
		border-radius: 8px;
		color: #fff;
		cursor: pointer;
	}

</style>