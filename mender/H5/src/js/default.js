require.config({
	paths: {
		"mui": "libs/mui.min"
	}
})

require(['mui'], function(mui) {
	let menId = window.location.search;
	let keyId = menId.slice(menId.indexOf("=") + 1);
	// console.log(keyId)

	let name = document.querySelector(".name"); //姓名
	let age = document.querySelector(".age"); //年龄
	let sex = document.querySelector(".sex"); //性别
	let addrees = document.querySelector(".addrees"); //地址
	let phone = document.querySelector(".phone"); //电话
	let danger = document.querySelector(".danger"); //取消
	let primary = document.querySelector(".primary"); //确定


	function init() {
		findone();
		updatet()
	}

	//查询接口
	function findone() {
		mui.ajax('/api/findone', {
			data: {
				id: keyId
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				readde(data.data)
			},
		});
	}


	//查看详细信息
	function readde(data) {
		// console.log(data)
		data.map(item => {
			// console.log(item)
			name.value = item.name
			age.value = item.age
			sex.value = item.sex
			addrees.value = item.addrees
			phone.value = item.phone
		})
	}

	//确定
	function updatet() {
		primary.onclick = () => {
			mui.ajax('/api/update', {
				data: {
					id: keyId,
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
				},
				error: function(xhr, type, errorThrown) {

				}
			});
			// location.href = "../index.html"
		}

	}



	//取消
	danger.onclick = () => {
		location.href = "../index.html"
	}



	init()
})
