(function(){
    'use strict';
    angular.module('hackital.home')
    .config(function($stateProvider){
        $stateProvider
            .state('home', {
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
                url: '/',
                templateUrl: 'components/home/home.html'
            });

    });
})();
