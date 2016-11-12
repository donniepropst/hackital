(function(){
    'use strict';
    angular.module('hackital.mapPage')
    .config(function($stateProvider){
        $stateProvider
            .state('mapPage', {
                controller: 'MapPageController',
                controllerAs: 'mapPageCtrl',
                url: '/mapPage',
                templateUrl: 'components/mapPage/mapPage.html'
            });

    });
})();
