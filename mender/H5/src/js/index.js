require.config({
	paths: {
		"mui": "libs/mui.min"
	}
})

require(["mui"], function(mui) {
	// console.log(mui)
	mui.ajax('/api/findUsr', {
		data: {

		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			findure(data.data)
			rest()
		},
	});



	//渲染列表	
	let oulis = document.querySelector(".oulis");
	let str = "";

	function findure(data) {
		data.map(item => {
			// console.log(item)
			str +=
				`
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						${item.name}
					</a>
					<button type="button" class="mui-btn mui-btn-blue look" data-index="${item._id}">查看</button>
					<button type="button" class="mui-btn mui-btn-red calcan" data-index="${item._id}">删除</button>
				</li>
			`
		})

		oulis.innerHTML = str;
	}
	
	function rest() {
		let looks = [...document.querySelectorAll('.look')]
		looks.map((item, i) => {
			item.onclick = () => {
				let id = looks[i].getAttribute('data-index');
				// console.log(id);
				location.href = "./html/default.html?id=" + id;
			}
		})
	}
})
