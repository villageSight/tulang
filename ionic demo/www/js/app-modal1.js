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

.controller('modalController',['$scope','$ionicModal','$timeout',
  function($scope,$ionicModal,$timeout){
      var template = '<ion-modal-view><ion-header-bar class="bar-positive"><h2 class="title">modal标题</h2></ion-header-bar><ion-content class="padding">字符串模板</ion-content></ion-modal-view>';

      // $scope.modal = $ionicModal.fromTemplate(template,{
      //   scope:$scope,
      //   animation:'slide-in-up'
      // })
      // $ionicModal.fromTemplateUrl('./tpl/modal.html',{
      //   scope:$scope,
      //   animation:'slide-in-up'
      // }).then(function(modal){
      //   $scope.modal = modal;
      // })

      $ionicModal.fromTemplateUrl('modal.html',{
        scope:$scope,
        animation:'slide-in-up',
        focusFirstInput:true,
        backdropClickToClose:true,
        handwareBackButtonClose:false
      }).then(function(modal){
        $scope.modal = modal;
      })


      $scope.openModal = function($event){
        $scope.modal.show($event);
        // $timeout(function(){
        //     console.log($scope.modal.isShown())
        //     $scope.modal.hide();
        // },3000)

        // $timeout(function(){
        //   $scope.modal.remove();
        // },5000)
      }

      $scope.$on('modal.hidden',function(){
        console.log('modal 视图隐藏了');
        console.log($scope.modal.isShown());
      })

      $scope.$on('modal.removed',function(){
        console.log('modal 视图移除了');
        console.log($scope.modal.isShown());
      })

      $scope.hideModal = function(){
        $scope.modal.hide();
      }
}])

