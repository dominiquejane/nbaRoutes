var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, homeService) {


	$scope.getTeamData = function() {
		homeService.getTeamData();
	};
	$scope.getTeamData();

	$scope.teamData = teamData;

	

}); 

