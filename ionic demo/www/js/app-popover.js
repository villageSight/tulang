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
.controller('popoverController',['$scope','$ionicPopover','$timeout'
,  function($scope,$ionicPopover,$timeout){
      var tpl = '<ion-popover-view><ion-header-bar> <h1 class="title">提示标题</h1> </ion-header-bar> <ion-content class="padding"> 字符串模板! </ion-content></ion-popover-view>';
      var template = '<ion-popover-view><ion-header-bar><h2 class="title">提示标题</h2></ion-header-bar><ion-content class="padding">字符串模板</ion-content></ion-popover-view>';
      // $scope.popover = $ionicPopover.fromTemplate(tpl,{
      //     scope:$scope
      // });
      $ionicPopover.fromTemplateUrl('./tpl/popover.html',{
          scope:$scope,
          focusFirstInput:true,
          backdropClickToClose:false,
          handwareBackButtonCLose:false
      }).then(function(popover){
          $scope.popover = popover;
      })
      $scope.openPopover = function($event){
        $scope.popover.show($event);
      }

      $timeout(function(){
          console.log( $scope.popover.isShown());
           $scope.popover.hide();
      },2000)

      $scope.$on('popover.hidden',function(){

        console.log('popover 隐藏了....')
console.log( $scope.popover.isShown());
       
      })

      // $timeout(function(){
      //     $scope.popover.remove();
      // },4000)

      $scope.$on('popover.removed',function(){
        console.log('popover 移除了....')
      })

}])