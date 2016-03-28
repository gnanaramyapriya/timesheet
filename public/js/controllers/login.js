var app = angular.module("app")
	app.controller("logController", ['logService','userDetails','$scope','$compile','$location',function(logService, userDetails,$scope,$compile,$location){
		
		
        $scope.submit=function(user){
         	console.log(user);

         	logService.setuser(user).then(function(value){
         		if(value == "success")
         			$location.url('/user')
         	});
         	 
         	};
         }]);
	app.directive('userpage',['logService','$compile',function(logService,$compile){
		return{
			restrict:'E',
			link:function(s,e,a){
				e.html(logService.template);
			}
		}
	}]);
         