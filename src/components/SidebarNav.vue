<template>
	<div class="slider">
		<ul>
			<li v-for="(list, index) in navInfo">
				<div @click="choose(index, 1)" >{{ list.title }}</div>
				<div class="childWrap" v-show="show(index, 1)">
					<div v-for="(item, ind) in list.field" >
						<div @click="choose(index+'_'+ind, 2)" style="color:red">{{ item.childTitle }}</div>
						<div  @click="choose(last, 3)" v-show="show(index+'_'+ind, 2)" class="nav_child" v-for="(last, i) in item.childField" style="color:orange;padding-left:20px;">{{last}}</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navInfo:[
					{
						title:'资料管理',

						field:[
							{
								childTitle:'类目1',
								
								childField:['类目1-1', '类目1-2', '类目1-3', '类目1-4', '类目1-5']
							},
							{
								childTitle:'类目2',
								childField:['类目2-1', '类目2-1', '类目2-1', '类目2-1', '类目2-1']
							},
							{
								childTitle:'类目3',
								childField:['类目3-1', '类目3-2', '类目3-3', '类目3-4', '类目3-5']
							}
						]
					},
					{
						title:'信息管理',
						field:[
							{
								childTitle:'种类1',
								childField:['种类1-1', '种类1-2', '种类1-3', '种类1-4', '种类1-5']
							},
							{
								childTitle:'种类2',
								childField:['种类2-1', '种类2-2', '种类2-3', '种类2-4', '种类2-5']
							},
							{
								childTitle:'种类3',
								childField:['种类3-1', '种类3-2', '种类3-3', '种类3-4', '种类3-5']
							}
						]
					},
					{
						title:'用户管理',
						field:[
							{
								childTitle:'用户1',
								childField:['用户1-1', '用户1-2', '用户1-3', '用户1-4', '用户1-5']
							},
							{
								childTitle:'用户2',
								childField:['用户2-1', '用户2-2', '用户2-3', '用户2-4', '用户2-5']
							},
							{
								childTitle:'用户3',
								childField:['用户3-1', '用户3-2', '用户3-3', '用户3-4', '用户3-5']
							}
						]
					}
				],

				navIndexShow:[],
				navChildShow:[]
			}
		},
		mounted(){
			
		},

		methods:{
			choose(index, type){
				let isHave = false;
				switch(type){
					case 1:
						this.navIndexShow.forEach((ele, i) => {
							if( index == ele ){
								isHave = true
								this.navIndexShow.splice(i, 1)
							}
						})
						if(!isHave)this.navIndexShow.push(index);
					break;

					case 2:
						this.navChildShow.forEach((ele, i) => {
							if( index == ele ){
								isHave = true
								this.navChildShow.splice(i, 1)
							}
						})
						if(!isHave)this.navChildShow.push(index);
					break;

					case 3:
						this.log("选择了->"+ index)
					break;
				}
			},

			show(index, type){
				let isShow = false;
				switch(type){
					case 1:
						this.navIndexShow.forEach(ele => {
							if( index == ele )isShow = true;
						})
					break;

					case 2:
						this.navChildShow.forEach(ele => {
							if( index == ele )isShow = true;
						})
					break;
				}
				return isShow
			}
		}
	}
</script>
<style>
	.slider{
		border:1px solid #000;
	}
	.slider ul{
		padding-left: 20px;
	}
	.slider ul li{
		cursor: pointer;
	}
	.slider ul li .childWrap{
		transition: all .4s;
		padding-left: 20px;
	}
	.slider ul li .lastWrap{
		padding-left: 20px;
	} 
</style>