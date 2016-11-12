(function(){
    'use strict';
    angular.module('hackital.home')
    .controller('HomeController', ['$cordovaGeolocation', HomeController]);

     function HomeController($cordovaGeolocation){
       var vm = this;
       vm.message = "tired";
       vm.getLocation = getLocation;
       var posOptions = {timeout: 10000, enableHighAccuracy: false};

       function getLocation(){
         $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
           var lat  = position.coords.latitude;
           var long = position.coords.longitude;
           console.log(lat, long);
         }, function(err) {
           // error
         });
       }
       }
})();
