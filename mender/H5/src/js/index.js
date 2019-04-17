
require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})

require(["mui"], function(mui){
	console.log(mui)
})