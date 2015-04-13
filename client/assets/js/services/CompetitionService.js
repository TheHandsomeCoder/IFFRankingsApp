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

