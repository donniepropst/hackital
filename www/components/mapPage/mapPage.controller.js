(function(){
    'use strict';
    angular.module('hackital.map')
    .controller('MapPageController', ['LocationService', 'LocationData','RuleService', MapPageController]);



    function MapPageController(LocationService, LocationData, RuleService){
        var vm = this;
        var location = LocationService.get();
        var address;
        var rule

        LocationData.getData(location.lat, location.long).then(function(result){
            if(result.data.rules && result.data.rules[0]){
                RuleService.findRule(result.data.rules[0].restrictions);
            }

            address = (result.data.blockNumber || '') + " " + result.data.streetName;
            initMap();
        });

        function initMap() {
            var uluru = {lat: location.lat, lng: location.long};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: uluru
            });
            var geocoder = new google.maps.Geocoder;
            var infowindow = new google.maps.InfoWindow;

            var contentString = '<div id="iw-container">'+
            '<div class="iw-title">'+ address +
            '</div>'+
            '<div id="bodyContent">'+
            '<p></p>'+
            '</div>'+
            '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map,
                title: ''
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            infowindow.open(map, marker);

        }
    }




})();
