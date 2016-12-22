// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('loadingController',['$scope','$ionicLoading','$timeout',
  function($scope,$ionicLoading,$timeout){
    $scope.showLoading = function(){
          $ionicLoading.show({
              // template:'正在加载',
              templateUrl:'./tpl/loading.html',
              noBackdrop:true,
              delay:1000,
              // duration:2000
          }).then(function(){
            console.log('loading视图显示了')
          })


          // $timeout(function(){
          //     $ionicLoading.hide({

          //     }).then(function(){
          //        console.log('loading视图消失了')
          //     })
          // },3000000000)
    }   
}])