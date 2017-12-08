<template>
  <div id="app">
  	<div class="login" v-if="!isLogin">
		<div class="loginWrap">
			<span>用户名：</span><input type="text" class="users" placeholder="管理员账号" v-model="users"></br>
			<span>密码：</span><input type="password" class="password" placeholder="管理员密码" v-model="password" @keyup.enter="goLogin()">
			<div class="btn"><p @click="goLogin()">登录</p></div>
		</div>
	</div>
	
	<div class="container">
		<div class="header">
			<span>cms管理平台</span>
			<span @click="out()">退出</span>
		</div>
		<div class="main">
			<SidebarNav class="slider"></SidebarNav>
    		<router-view class="mainContent"></router-view>
		</div>
	</div>
  </div>
</template>

<script>
import SidebarNav from './components/SidebarNav'
import { mapGetters } from 'vuex'
export default {
	name: 'app',

	data(){
		return {
			users: '',
		    password: ''
		}
	},
	
	methods: {
		goLogin () {
			let param = {
				name : this.users,
				pass : this.password
			}
			this.api.postLogin(param).then(res => {
				console.log(res.data)
				if( res.data.status === 1 ){
					this.$store.dispatch('isLogin', true);
					localStorage.setItem('login', 'true');
				}else{
					alert(res.data.text)
				}
			})
		},
		

		out(){
			localStorage.removeItem('login')
			this.$store.dispatch('isLogin', false);
		}
	},
	
  	computed: {
    	...mapGetters([
      		'isLogin'
    	])
  	},

  	
	components:{
		SidebarNav
	}
}
</script>

<style lang="scss" scoped>
	.login{
		position: fixed;
		width: 100%;
		height:100%;
		background: #3F3F3F;
	}
	.loginWrap{
		position: absolute;
		top:50%;
		left: 50%;
		width: 500px;
		height: 300px;
		transform: translate(-50%, -50%);
		background: #2D2D2D;
		border-radius: 8px;
		text-align: center;
		span{
			display: inline-block;
			width: 70px;
			height:35px;
			line-height: 35px;
			color:#fff;
		}
		input{
			width:200px;
			height:35px;
			line-height: 35px;
			background: #fff;
			margin-top:60px;
			padding-left: 10px;
			border-radius: 8px;
		}
		p{	
			display: inline-block;
			width:100px;
			line-height:35px;
			color:#fff;
			background: #3a3a3a;
			margin-top: 40px;
			border-radius: 8px;
			cursor: pointer;
			-webkit-user-select: none; 
		}
		p:hover{
			background: #f40;
		}
	}
	#app{
		background: #ccc;
	}
	.container{
		margin:0 auto;
		background: #fff;
	}
	.header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #000;
		span{
			line-height: 50px;
			padding: 0 20px;
			cursor: pointer;
			color:#fff;
		}
		span:hover{
			background: green;
		}
	}
	.main{
		display: flex;
	}
	.slider{
		width: 10%;
	}
	.mainContent{
		width: 90%;
	}
</style>
