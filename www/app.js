angular.module('hackital', [
    'ionic',
    'ngCordova',
    'hackital.home',
    'hackital.map',
    'hackital.core',
    'angularMoment'
  ])

.run(function($ionicPlatform, $state) {
  console.log('run');
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('home');
  });
})
.config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
