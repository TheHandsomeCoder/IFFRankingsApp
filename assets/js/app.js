(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    //3rd party
    'autocomplete'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();

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


angular.module('application')
    .controller('FencerController', FencerController);

FencerController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'FencerService'];
function FencerController($scope, $stateParams, $state, $controller, FencerService)
{
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    $scope.title = "Fencers";
    $scope.fencers = FencerService.fencers;
}


angular.module('application')
    .service('CompetitionService', CompetitionService); 

  function CompetitionService() {
    var service    = {};

    service.competitions = [{name:"East of Ireland",id:"1"},{name:"Northern Ireland Open",id:"2"},{name:"West of Ireland",id:"3"},{name:"South of Ireland",id:"4"}];  

    service.getCompetition = getCompetition;

    return service;    


    function getCompetition(id)
    {
      var competition = _.find(service.competitions, { 'id': id});
      return competition;
    } 
  }


angular.module('application')
    .service('FencerService', FencerService);

function FencerService() {
    var service    = {};

    service.fencers = [{name:"Scott O'Malley",id:"1"},{name:"James Shannon",id:"2"},{name:"Paddy Brennan",id:"3"},{name:"Chadwick Kinsella",id:"4"}];

    service.getFencer = getFencer;

    return service;


    function getFencer(id)
    {
        var competition = _.find(service.fencers, { 'id': id});
        return competition;
    }
}

/**
 * Created by somalley on 14/04/2015.
 */

angular.module('application')
    .service('ResultsService', ResultsService); 

  function ResultsService() {
    var service    = {};

    service.results =[{id:1, fencer:1, rank:2},{id:1, fencer:1, rank:2},{id:1, fencer:1, rank:3},{id:1, fencer:1, rank:4}];

    return service;    

}

