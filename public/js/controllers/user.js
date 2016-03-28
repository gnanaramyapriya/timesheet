angular.module('app')
.controller('userCntrl',['userDetails','$scope',function(userDetails,$scope){
	$scope.name=userDetails.getUsername();
		
}])
