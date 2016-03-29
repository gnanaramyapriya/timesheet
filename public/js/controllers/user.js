angular.module('app')
.controller('userCntrl',['userDetails','$scope','weeks',function(userDetails,$scope,weeks){
	$scope.name=userDetails.getUsername();
	
	$scope.num_week1= 1;
	$scope.submit = function(timesheet){
		$scope.timesheet.week1=$scope.timesheet.m1+$scope.timesheet.t1+$scope.timesheet.w1+$scope.timesheet.r1+$scope.timesheet.f1;
		$scope.timesheet.week2=$scope.timesheet.m2+$scope.timesheet.t2+$scope.timesheet.w2+$scope.timesheet.r2+$scope.timesheet.f2;
		$scope.timesheet.week3=$scope.timesheet.m3+$scope.timesheet.t3+$scope.timesheet.w3+$scope.timesheet.r3+$scope.timesheet.f3;
		$scope.timesheet.week4=$scope.timesheet.m4+$scope.timesheet.t4+$scope.timesheet.w4+$scope.timesheet.r4+$scope.timesheet.f4;
		$scope.timesheet.username = $scope.name;
		console.log($scope.timesheet);
		weeks.weekreport($scope.timesheet).then(function(res){
			console.log(res.value);
		})
	}

}])
