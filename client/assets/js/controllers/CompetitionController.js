angular.module('application')
    .controller('CompetitionController', CompetitionController);

CompetitionController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'CompetitionService', 'FencerService'];
function CompetitionController($scope, $stateParams, $state, $controller, CompetitionService, FencerService)
{
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    
    $scope.competitions = CompetitionService.competitions;
    $scope.fencers = FencerService.fencers;

    var competitionID = $stateParams.id;
    $scope.competition = CompetitionService.getCompetition(competitionID);
    $scope.results = [];

    $scope.addNewResult = function(){
    	$scope.results.push({rank:1, fencer:{name:"Scott O'Malley",club:"Phoenix"}, points: 55});
    };

}

