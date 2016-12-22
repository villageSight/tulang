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
from snap      // ping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.constant('$ionicLoadingConfig',{
            // template:'加载中...',
            templateUrl:'./tpl/loading.html',
            noBackdrop:true,
            delay:500,
            // duration:2000,

            animation:'fade-in',
            minWidth:300,
})
.controller('loadingCtrl',['$scope','$ionicLoading','$timeout',
  function($scope,$ionicLoading,$timeout){
      $scope.showLoading = function(){
          $ionicLoading.show({

          }).then(function(){
            console.log('loading视图加载完毕...')
          });

          // $timeout(function(){
          //   $ionicLoading.hide({
          //     animation:'fade-out',
          //   }).then(function(){
          //       console.log('loading视图隐藏...')
          //     })
          // },3000)
      }
}])