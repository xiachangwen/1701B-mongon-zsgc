require.config({
	paths: {
		"mui": "libs/mui.min"
	}
})

require(["mui"], function(mui) {

	function init() {
		findUsr();
	}
	//查询接口
	function findUsr() {
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
	}

	//渲染列表	
	function findure(data) {
		let oulis = document.querySelector(".oulis");
		let str = "";
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
		deletes()

	}

	//跳转
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

	//删除接口
	function deletes() {
		mui('.oulis').on('tap', '.calcan', function(e) {
			let id = this.getAttribute("data-index");
			mui.confirm('确定删除吗！', '提示', ['确认', '取消'], function(e) {
				console.log(e.index)
				if (e.index === 0) {
					mui.ajax('/api/getdelete', {
						data: {
							id: id
						},
						dataType: 'json', //服务器返回json格式数据
						type: 'post', //HTTP请求类型
						timeout: 10000, //超时时间设置为10秒；
						success: function(data) {
							mui.alert(data.mes,'提示','确定',function () {
								findUsr();
							})
						},
						
					});
				}
			})


		})
	}

	//添加
	let add = document.querySelector('.add');
	add.onclick = () => {
		location.href = "./html/add.html";
	}
	
	init()
})
