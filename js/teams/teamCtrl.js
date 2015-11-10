var app = angular.module('nbaRoutes');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

	$scope.getTeamData = function() {
		teamService.getTeamData();
	}
	$scope.getTeamData();

	$scope.teamData = teamData;
	console.log(teamData);
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function () {
		var toggle = $scope.showNewGameForm
		if (toggle === true) {
			toggle = false;
		}
		else if (toggle === false) {
			toggle = true;
		}
		$scope.showNewGameForm = toggle;
		return $scope.showNewGameForm;
	}

	$scope.submitGame = function () {
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame).then(function() {
			teamService.getTeamData($scope.newGame.homeTeam).then(function(results){ 
					$scope.teamData = results;
					$scope.newGame = {};
					$scope.showNewGameForm = false;
			});	
		});
	}

	if($stateParams.team === 'utahjazz') {
			$scope.homeTeam = 'Utah Jazz';
			$scope.logoPath = 'images/jazz-logo.png';
		}
		else if($stateParams.team === 'losangeleslakers') {
			$scope.homeTeam = 'Los Angeles Lakers';
			$scope.logoPath = 'images/lakers-logo.png';
		}
		else if($stateParams.team === 'miamiheat') {
			$scope.homeTeam = 'Miami Heat';
			$scope.logoPath = 'images/heat-logo.png';
		}
		else {
			$scope.logoPath = 'images/nba-logo.png';
		}

	

});
  