(function(){
    'use strict';
    angular.module('hackital.core')
    .factory('MapService', [MapService]);

    function MapService(){
        var service = {
            init: init
        };
        function init(displayText1, displayText2, safe, address, location){
            var uluru = {lat: location.lat, lng: location.long};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: uluru
            });
            var geocoder = new google.maps.Geocoder;
            var infowindow;
            var titleClass;
            if(safe === false){
                titleClass = 'iw-title-safe';
            }else if(safe == 'no-data'){
                titleClass = 'iw-title-no-data';
            }else{
                titleClass = 'iw-title-not-safe';
            }

            var contentString = '<div id="iw-container">'+
            '<div class="' +titleClass+ '">'+ address +
            '</div>'+
            '<div id="bodyContent">'+
            '<p class="center-text">'+displayText1+'</p>'+'<p class="center-text">'+displayText2+'</p>'
            '</div>'+
            '</div>';

            infowindow = new google.maps.InfoWindow({
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
        return service;
    }
})();
