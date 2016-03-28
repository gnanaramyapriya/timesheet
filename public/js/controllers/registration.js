var app = angular.module("app")
	app.controller("regController", ['RegService','$scope',function(RegService,$scope){
		$scope.submit=function(user){
         	console.log(user);

         	console.log(RegService.setuser(user));
         	 
        };
         	 
        
         }]);
         
