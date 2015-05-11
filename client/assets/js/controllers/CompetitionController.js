angular.module('application')
    .controller('CompetitionController', CompetitionController);

CompetitionController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'CompetitionService'];
function CompetitionController($scope, $stateParams, $state, $controller, CompetitionService)
{
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    
    $scope.competitions = CompetitionService.competitions;
    var competitionID = $stateParams.id;
    $scope.competition = CompetitionService.getCompetition(competitionID);
    $scope.results = [];

    $scope.addNewResult = function(){
    	$scope.results.push({rank:1, fencer:"Scott O'Malley", points: 55});
    };

}

