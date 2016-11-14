(function(){
    'use strict';
    angular.module('hackital.map')
    .controller('MapPageController', ['LocationService', 'LocationData','RuleService','$ionicLoading', 'MapService', MapPageController]);



    function MapPageController(LocationService, LocationData, RuleService,$ionicLoading, MapService){
        var vm = this;
        var location = LocationService.get();
        var address;
        var rule
        var displayText1;
        var displayText2;
        var safe;

        $ionicLoading.show({
            template: '<ion-spinner class="spinner-energized" icon="ripple"></ion-spinner>'
        }).then(function(){
            LocationData.getData(location.lat, location.long).then(function(result){

                if(result.data.success){
                    var text = RuleService.findRule(result.data.rules[0].restrictions);
                    displayText1 = text.displayText1;
                    displayText2 = text.displayText2;
                    safe = false;
                }else{
                    displayText1 = result.data.message;
                    displayText2 = '';
                    safe = "no-data";
                }
                if(result.data.blockNumber || result.data.streetNumber){
                    address = (result.data.blockNumber || result.data.streetNumber) + " " + result.data.streetName;
                }else{
                    address = result.data.streetName;
                }
                $ionicLoading.hide().then(function(result){
                    MapService.init(displayText1, displayText2, safe, address, location);
                });
            });
        });



    }




})();
