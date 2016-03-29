angular.module('app')
.factory('weeks',function($http){
	return{
		weekreport:function(timesheet){
			console.log(timesheet)
			return $http.post('/api/report',timesheet).then(function(response){
				return response.data;
			})
		}
	}
})