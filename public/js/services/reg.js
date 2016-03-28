angular.module("app")
.factory('RegService',function($http){
	return{
	setuser:function(user){
		return $http.post('/api/reg',user).then(function(res){
			return res.data;
		})
	}
	}
})