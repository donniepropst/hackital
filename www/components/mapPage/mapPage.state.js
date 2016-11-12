(function(){
    'use strict';
    angular.module('hackital.map')
    .config(function($stateProvider){
        $stateProvider
            .state('map', {
                controller: 'MapPageController',
                controllerAs: 'mapPageCtrl',
                url: '/mapPage',
                templateUrl: 'components/mapPage/mapPage.html'
            });

    });
})();
