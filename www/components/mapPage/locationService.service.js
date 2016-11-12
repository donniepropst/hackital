(function(){
  'use strict';
  angular.module('hackital.map')
.factory('LocationService', [LocationService]);

  function LocationService(){
    var service = {
      set: set,
      get: get
    }
    var latitude;
    var longitude;

    function get(){
      return {
        lat: latitude,
        long: longitude
      }
    }

    function set(lat, long){
      latitude = lat;
      longitude = long;
    }


    return service;
  }


})();
