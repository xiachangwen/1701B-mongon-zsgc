require.config({
	paths: {
		"mui": "libs/mui.min"
	}
})

require(['mui'],function(mui){
	// console.log(mui)
	let name = document.querySelector(".name"); //姓名
	let age = document.querySelector(".age"); //年龄
	let sex = document.querySelector(".sex"); //性别
	let addrees = document.querySelector(".addrees"); //地址
	let phone = document.querySelector(".phone"); //电话
	let danger = document.querySelector(".danger"); //取消
	let primary = document.querySelector(".primary"); //确定
	
	function init() {
		getadd()
	}
	
	function getadd(){
		primary.onclick = () => {
			mui.ajax('/api/getadd', {
				data: {
					name: name.value,
					age: age.value,
					sex: sex.value,
					addrees: addrees.value,
					phone: phone.value
		
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					console.log(data)
					mui.alert(data.mes,'提示','确定',function (e) {
					   location.href = "../index.html"
					})
		
				},
			});
		}
	}
	
	
	//取消添加
	danger.onclick = () => {
		location.href = "../index.html"
	}
	
	
	
	init()
})