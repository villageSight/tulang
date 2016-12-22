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
 .controller('ListController',['$scope','$ionicScrollDelegate',
  '$http','$timeout','$rootScope',
  function($scope,$ionicScrollDelegate,$http,$timeout,$rootScope){
    var items = [
    {
      title: 'item1',
      description: 'item1 description'
    },
    {
      title: 'item2',
      description: 'item2 description'
    },
    {
      title: 'item3',
      description: 'item3 description'
    },
    {
      title: 'item4',
      description: 'item4 description'
    },
    {
      title: 'item5',
      description: 'item5 description'
    },
    {
      title: 'item6',
      description: 'item6 description'
    },
    {
      title: 'item7',
      description: 'item7 description'
    },
    {
      title: 'item8',
      description: 'item8 description'
    },
    {
      title: 'item9',
      description: 'item9 description'
    },
    {
      title: 'item10',
      description: 'item10 description'
    }
  ];

  $scope.items = items;
  $rootScope.pullText = '下拉刷新'
  $scope.doRefresh = function(){
      $timeout(function() {
       $http.get('./mock/new-items.json')
       .success(function(newItems){
          $scope.items = newItems;
          $rootScope.pullText = '刷新成功'
       })
       .finally(function(){
          $scope.$broadcast('scroll.refreshComplete')
           $rootScope.pullText = '下拉刷新'
       })
      }, 2000);
  }
  //表示拖动
  $scope.doPulling = function(){
    console.log('pulling...开始拖拽')
  }

  $scope.$on('scroll.refreshComplete',function(){
    console.log('刷新数据成功...')
  });


  $scope.loadMore = function(){
    $timeout(function(){
        $http.get('./mock/more-items.json')
        .success(function(moreItems){
            $scope.items = $scope.items.concat(moreItems);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        })
    },2000)
  }


  $scope.$on('scroll.infiniteScrollComplete',function(){
    console.log('数据加载成功')
  })
 }])