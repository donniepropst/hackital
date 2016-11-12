(function(){
    'use strict';
    angular.module('hackital.home')
    .controller('HomeController', [HomeController]);

     function HomeController(){
       var vm = this;
       vm.message = "tired";

       }
})();
