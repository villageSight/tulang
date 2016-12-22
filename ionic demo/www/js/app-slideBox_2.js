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

.controller('slideBoxCtrl2',['$scope','$ionicSlideBoxDelegate','$ionicSlides',function($scope,$ionicSlideBoxDelegate,$ionicSlides){
      
      $scope.options = {
          loop:true,
          autoplay:true,
          speed:1500,
          effect:'slide',
          onTap:function(swiper){
            console.log(swiper.activeIndex)
          },
          onSlideChangeStart:function(swiper){
            if(swiper.activeIndex == '2'){
              console.log('进入第三页了')
            }
          }
      }

      $scope.$on('$ionicSlides.sliderInitialized',function(event,data){
        console.log(data.slider)
      });

      $scope.$on('$ionicSlides.slideChangeStart',function(event,data){
          console.log('swiper.slide开始切换了')
      });

      $scope.$on('$ionicSlides.slideChangeEnd',function(event,data){
         console.log(data.slider.activeIndex);
         console.log(data.slider.previousIndex);
         data.slider.updateLoop();
         //切换完成后 数据加载完成  动态刷新swiper

      })
}])