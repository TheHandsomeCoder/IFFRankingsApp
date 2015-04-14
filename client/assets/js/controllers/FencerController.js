angular.module('application')
    .controller('FencerController', FencerController);

FencerController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'FencerService'];
function FencerController($scope, $stateParams, $state, $controller, FencerService)
{
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    $scope.title = "Fencers";
    $scope.fencers = FencerService.fencers;
}

