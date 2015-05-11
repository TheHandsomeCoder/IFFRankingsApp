angular.module('application')
    .service('ResultsService', ResultsService); 

  function ResultsService() {
    var service    = {};

    service.results =[{id:1, fencer:1, rank:2},{id:1, fencer:1, rank:2},{id:1, fencer:1, rank:3},{id:1, fencer:1, rank:4}];

    return service;    

}

