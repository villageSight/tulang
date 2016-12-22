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
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('tabs',{
      url:'/tab',
      // abstract:true,
      // 模板不能被显性激活，但是子模板可以被显性激活，不可以直接通过tabs来访问它，
      // 但是可以通过子模板来访问它
      templateUrl:'templates/tabs.html'
    })
    .state('tabs.home',{
      url:'/home',
      views:{
        'home-tab':{
          templateUrl:'templates/home.html',
          controller:'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts',{
      url:'/facts',
      views:{
        'home-tab':{
          templateUrl:'templates/facts.html'
        }
      }
    })
    .state('tabs.facts2',{
      url:'/facts2',
      views:{
        'home-tab':{
          templateUrl:'templates/facts2.html',
          controller:'Facts2TabCtrl'
        }
      }
    })
    .state('tabs.about',{
      url:'/about',
      views:{
        'about-tab':{
          templateUrl:'templates/about.html',
        }
      }
    })
    .state('tabs.navstack',{
      url:'/navstack',
      views:{
        'about-tab':{
          templateUrl:'templates/nav-stack.html'
        }
      }
    })
    .state('tabs.contact',{
      url:'/contact',
      views:{
        'contact-tab':{
          templateUrl:'templates/contact.html'
        }
      }
    })

    $urlRouterProvider.otherwise('/tab/home');
})

.controller('HomeTabCtrl',['$scope','$ionicSlideBoxDelegate','$timeout',
  function($scope,$ionicSlideBoxDelegate,$timeout){

}])

.controller('Facts2TabCtrl',['$scope','$ionicNavBarDelegate','$timeout',
  function($scope,$ionicNavBarDelegate,$timeout){
    $scope.isShowBackButton = true;
    $scope.ifshowBar = true;

    $scope.showBackButton = function(){
        $ionicNavBarDelegate.showBackButton($scope.isShowBackButton = !$scope.isShowBackButton)
    }

    $scope.titleAlign = function(dir){
      $ionicNavBarDelegate.align(dir);
    }

    $scope.showBar = function(){
      $ionicNavBarDelegate.showBar($scope.ifshowBar = !$scope.ifshowBar);
    }

    $scope.changeTitle = function(){
      $ionicNavBarDelegate.title('详情页1');
    }
}])

