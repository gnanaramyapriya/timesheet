'use strict';
angular.module('app', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl:"templates/login.html",
                    controller:'logController'
                })
                .when('/register', {
                    templateUrl:"templates/Registration.html",
                    controller:'regController'
                })
                .when('/user', {
                    templateUrl: 'templates/userPage.html'
                });


        }])
    .controller('mainCntrl',['userDetails','$routeParams','$scope','$http',function(userDetails,$routeParams,$scope,$http)
    {
      
        this.params = $routeParams;
        $scope.isActive = function(){
            return userDetails.getStatus();
        }
        $scope.name = userDetails.getUsername();
    }]);
    