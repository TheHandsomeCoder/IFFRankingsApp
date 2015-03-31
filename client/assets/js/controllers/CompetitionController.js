angular.module('application')
    .controller('CompetitionController', CompetitionController);

CompetitionController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function CompetitionController($scope, $stateParams, $state, $controller)
{
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    $scope.title = "Controller Test";
}

