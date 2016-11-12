(function(){
    'use strict';
    angular.module('hackital.home')
    .controller('HomeController', ['$cordovaGeolocation', '$state','LocationService','LocationData', HomeController]);

     function HomeController($cordovaGeolocation, $state, LocationService, LocationData){
       var vm = this;
       vm.message = "tired";
       vm.getLocation = getLocation;
       var posOptions = {timeout: 10000, enableHighAccuracy: false};

       function getLocation(){
         $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
           var lat  = position.coords.latitude;
           var long = position.coords.longitude;
           LocationService.set(lat, long);

           $state.go('map');
         }, function(err) {
         });
       }
       }
})();
