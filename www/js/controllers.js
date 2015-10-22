angular.module('starter.controllers', [])

.controller('ZombieCtrl', function($scope, $http) {
	$http.get('http://zombie-api.herokuapp.com//api/zombies')
		.success(function(response){
			$scope.zombies = response;
		});
});