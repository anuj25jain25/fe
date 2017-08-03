var app=angular.module('myapp',[]);

app.run(function($rootScope){
	console.log("hey angular working");
	$rootScope.token="null";
});

app.controller('log',function($scope,$http){
	$scope.loginMe=function(){
		//console.log($scope.data);
	$http({
		url:'/login',
		method:'POST',
		data:$scope.data
	}).then(function(res){
		console.log("response: "+res);
		$rootScope.token=res.data.token;
	},function(res){});
	}
});

app.controller('reg',function($scope,$http){
	$scope.registerMe=function(){
		//console.log($scope.data);
	$http({
		url:'/registration',
		method:'POST',
		data:$scope.data
	}).then(function(res){
		console.log("response: "+res);
	},function(res){});
	}
});
app.controller('dash',function($scope,$http,$rootScope){
	$scope.logout=function(){
		//console.log($scope.data);
	$http({
		url:'/logout',
		headers:{
			"x-access-token":$rootScope.token;
		},
		method:'GET',
		data:$scope.data
	}).then(function(res){
		console.log("response: "+res);
	},function(res){});
	}
});