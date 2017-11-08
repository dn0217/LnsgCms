<template>
	<div class="login">
		<div class="loginWrap">
			<span>用户名：</span><input type="text" class="users" placeholder="管理员账号" v-model="users"></br>
			<span>密码：</span><input type="password" class="password" placeholder="管理员密码" v-model="password">
			<div class="btn"><p @click="goLogin()">登录</p></div>
		</div>
	</div>
</template>


<script>
export default {
  name: 'ligon',
  data () {
    return {
      users: '',
      password: ''
    }
  },
  created () {

  },
  methods: {
    goLogin () {
      console.log(this.users)
      console.log(this.password)
      this.$router.push('/ServerIndex')
    }
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

</style>