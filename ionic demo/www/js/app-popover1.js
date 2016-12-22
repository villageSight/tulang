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

.controller('popoverController',['$scope','$ionicPopover','$timeout',
  function($scope,$ionicPopover,$timeout){
      var template = '<ion-popover-view><ion-header-bar class="bar-positive"><h2 class="title">popover标题</h2></ion-header-bar><ion-content class="padding">字符串模板</ion-content></ion-popover-view>';

      // $scope.popover = $ionicPopover.fromTemplate(template,{
      // 	scope:$scope
      // })

      	 $ionicPopover.fromTemplateUrl('popover1.html',{
      		scope:$scope,
      		focusFirstInput:true,
      		backdropClickToClose:false,
      		handwareBackButtonClose:false
      	}).then(function(popover){
      		// 成功后 $scope.popover 
      		$scope.popover = popover;
      		$scope.yourname = '郑州1601';
      	})


      $scope.openPopover = function($event){
      	console.log($event);
      	$scope.popover.show($event);
      	//  $timeout(function(){
	      // 	console.log($scope.popover.isShown());
	      // 	$scope.popover.hide();
	      // 	// 隐藏popover
	      // },3000);

      	//  $timeout(function(){
      	//  		$scope.popover.remove();
      	//  },4000)
      }

      $scope.$on('popover.hidden',function(){
      	 console.log('popover视图 隐藏了');
      	 console.log($scope.popover.isShown());
      });

      $scope.$on('popover.removed',function(){
      	console.log('popover视图 移除了');
      })

      $scope.closePopover = function(){
      		$scope.popover.hide();
      }

}])

