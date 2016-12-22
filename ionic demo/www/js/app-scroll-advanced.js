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
 .controller('scorllController',['$scope','$ionicScrollDelegate',function($scope,$ionicScrollDelegate){
    $scope.scrollAction = function(){
      console.log('scrolling....')
    }
    $scope.scrollTop = function(){
      $ionicScrollDelegate.scrollTop(true);
    }

    $scope.scrollBottom = function(){
      $ionicScrollDelegate.scrollBottom(true);
    }

    $scope.scrollTo = function(x,y){
      $ionicScrollDelegate.scrollTo(x,y,true);
    }

    $scope.scrollBy =function(){
      $ionicScrollDelegate.scrollBy(0,50,true)
    }

    $scope.zoomTo = function(n){
      $ionicScrollDelegate.zoomTo(n,true,100,100);
    }

    $scope.zoomToOrigin = function(){
       $ionicScrollDelegate.zoomTo(1,true);
    }

    $scope.getPos =function(){
      console.log($ionicScrollDelegate.getScrollPosition());
    }

    $scope.freezeScroll = function(){
      console.log(124444)
      $ionicScrollDelegate.freezeAllScrolls()
    }

    $scope.scrollToSmallTop = function(){
      $ionicScrollDelegate.$getByHandle('smallScroll').scrollTop(true)
    }

    $scope.scrollToMainTop = function(){
      $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop(true);
    }

 }])