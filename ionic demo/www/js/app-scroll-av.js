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
  .controller('controllerList',['$scope','$ionicScrollDelegate',function($scope,$ionicScrollDelegate){
        // $scope.scrollAction = function(){
        //     console.log('scrolling...')
        // }
        $scope.scrollTop = function(){
            $ionicScrollDelegate.scrollTop(true);
        }
        $scope.scrollBottom = function(){
            $ionicScrollDelegate.scrollBottom(true);
        }
        $scope.scrollTo = function(x,y){
            $ionicScrollDelegate.scrollTo(x,y,true);
        }
        $scope.scrollBy = function(x,y){
          $ionicScrollDelegate.scrollBy(x,y,true);
        }
        $scope.zoomTo = function(n){
          $ionicScrollDelegate.zoomTo(3,true);
        }
        //监测坐标
          $scope.getPos = function () {
            console.log($ionicScrollDelegate.getScrollPosition());
          }

          $scope.freezeScroll = function () {
            $ionicScrollDelegate.freezeAllScrolls();
          }

          $scope.scrollMainToTop = function() {
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
          };

          $scope.scrollSmallToTop = function() {
            $ionicScrollDelegate.$getByHandle('small').scrollTop();
          };
  }])

// .controller('controllerList',['$scope','$ionicListDelegate',function($scope,$ionicListDelegate){
//     $scope.scrollAction = function(){
//        console.log('scrolling');
//     }
//     $scope.scrollActionEnd = function(){
//       console.log('scorllEnd');
//     }

//     var items = [
//     {
//       title: 'item1',
//       description: 'item1 description'
//     },
//     {
//       title: 'item2',
//       description: 'item2 description'
//     },
//     {
//       title: 'item3',
//       description: 'item3 description'
//     },
//     {
//       title: 'item4',
//       description: 'item4 description'
//     },
//     {
//       title: 'item5',
//       description: 'item5 description'
//     },
//     {
//       title: 'item6',
//       description: 'item6 description'
//     },
//     {
//       title: 'item7',
//       description: 'item7 description'
//     },
//     {
//       title: 'item8',
//       description: 'item8 description'
//     },
//     {
//       title: 'item9',
//       description: 'item9 description'
//     },
//     {
//       title: 'item10',
//       description: 'item10 description'
//     }
//   ];

//   $scope.items = items;
//   $scope.canSwipeFlag = true;
//   // $scope.showDelete = true;
//   $scope.moveItem = function(item,fromIndex,toIndex){
//       $scope.items.splice(fromIndex,1);
//       $scope.items.splice(toIndex,0,item);
//   }
//   var showIF = true;
  
//   $scope.showDeleteButtons = function(){
//       // 安全依赖注入 ，使用数组的形式
//       // 事件代理对象自定义的服务$ionicListDelegate
//       if(showIF){
//         $ionicListDelegate.showDelete(true);
//       }else{
//          $ionicListDelegate.showDelete(false);
//       }
//       showIF = !showIF;
//     }

//     $scope.showRc = function(){
//       console.log(123);
//       $ionicListDelegate.$getByHandle('my-handle').showReorder(true);
//     }
// }])