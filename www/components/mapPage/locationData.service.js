(function (){
    'use strict';
    angular.module('hackital.map')
    .factory('LocationData', ['$http', LocationData])

    function LocationData($http){
        var service = {
            getData: getData
        }

        function getData(latitude, longitude){
            return $http({
                method: 'GET',
                url: 'api/street/location',
                params: {
                    latitude: latitude,
                    longitude: longitude
                }
            });
        }
        return service;
    }
})();
