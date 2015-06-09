angular.module('application')
    .service('FencerService', FencerService);

function FencerService() {
    var service    = {};

    service.fencers = ["Scott O'Malley","James Shannon","Paddy Brennan","Chadwick Kinsella"];
    //service.fencers = [{name:"Scott O'Malley",id:"1"},{name:"James Shannon",id:"2"},{name:"Paddy Brennan",id:"3"},{name:"Chadwick Kinsella",id:"4"}];

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
