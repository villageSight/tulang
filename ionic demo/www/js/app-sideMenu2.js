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

    .state('app',{
      url:'/app',
      abstract:true,
      templateUrl:'./templates/sidemenu-menu.html',
      controller:'AppCtrl'
    })

    .state('app.search',{
      url:'/search',
      views:{
        'menuContent':{
          templateUrl:'./templates/sidemenu-search.html'
        }
      }
    })

    .state('app.browse',{
      url:'/browse',
      views:{
        'menuContent':{
          templateUrl:'./templates/sidemenu-browse.html'
        }
      }
    })

    .state('app.playlists',{
      url:'/playlists',
      views:{
        'menuContent':{
          templateUrl:'./templates/sidemenu-playlists.html',
          controller:'PlaylistsCtrl'
        }
      }
    })

    .state('app.playDetails',{
      url:'/playlists/:playlistId',
      views:{
        'menuContent':{
          templateUrl:'./templates/sidemenu-playDetails.html',
          controller:'PlayDetailsCtrl'
        }
      }
    })

    $urlRouterProvider.otherwise('/app/playlists')
})
.service('getData',function(){
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
  return {
    all:function(){
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})
.controller('AppCtrl',['$scope','$ionicModal','$timeout'
,  function($scope,$ionicModal,$timeout){
      $ionicModal.fromTemplateUrl('./templates/sidemenu-login.html',{
          scope:$scope,
          animation:'slide-in-up',
      }).then(function(modal){
          $scope.modal = modal
      })
      $scope.login = function(){
        console.log(123);
          $scope.modal.show();
      }

      $scope.hideModal =function(){
        $timeout(function(){
          $scope.modal.hide();
        },500)
      }
}])

.controller('PlaylistsCtrl',['$scope','$timeout','getData'
,  function($scope,$timeout,getData){
      $scope.playlists = getData.all();
}])

.controller('PlayDetailsCtrl',['$scope','getData','$stateParams'
,  function($scope,getData,$stateParams){
      $scope.players = getData.get($stateParams.playlistId);
}])