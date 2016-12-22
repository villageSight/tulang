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
.controller('popupController',['$scope','$ionicPopup','$timeout',
  function($scope,$ionicPopup,$timeout){

    //  自定义popup
      $scope.showPopup = function(){
          $scope.data = {};
          var mypopup = $ionicPopup.show({
              template:'<input type="password" ng-model="data.wifi"/>',
              title:'请输入密码',
              subTitle:'6-8位字符',
              scope:$scope,
              buttons:[
              {
                text:'<b>取消</b>',
                type:'button-royal'
              },
              {
                text:'<b>确定</b>',
                type:'button-balanced',
                onTap:function(e){
                  if($scope.data.wifi){
                     return $scope.data.wifi;
                  }else{
                    e.preventDefault();
                  }
                }
              }],
              cssClass:'pop'
          });
          mypopup.then(function(res){
              console.log('你输入的密码是:'+res);
          });
          $timeout(function(){
              mypopup.close()
          },3000);
      }
      // pupup alert

      $scope.alertPopup =function(){
        var alertpopup = $ionicPopup.alert({
            title:'警告',
            subTitle:'必须提示所有人！',
            template:'这个东西很诱人,但千万不要吃,有毒！',
            templateUrl:'',
            cssClass:'ae',
            okText:'知道了',
            okType:'button-energized',
        })
        alertpopup.then(function(res){
            console.log('你已经知道了:'+res);
        })
      }

      // popup confirm 
      $scope.confirmPopup = function(){
          $ionicPopup.confirm({
              title:'提示',
              subTitle:'你当前正在使用4G网络，还继续观看吗?',
              cancelText:'取消观看',
              cancelType:'button-dark',
              okText:'继续观看',
              okType:'button-balanced',
              cssClass:'cf',
              templateUrl:'./tpl/confirm.html'
          }).then(function(res){
              console.log('你的操作是:'+res);
              if(res){
                console.log("土豪，够霸气，请继续")
              }else{
                console.log('停止观看了。。。')
              }
          })
      }


      //popup prompt

      $scope.promptPopup = function(){
          $ionicPopup.prompt({
              title:'密码验证',
              subTitle:'请输入密码!',
              inputType:'password',
              inputPlaceholder:'至少8位字符',
              okText:'提交',
              okType:'button-positive',
              cancelText:'取消',
              cancelType:'button-assertive',
              defaultText:'abc123',
              maxLength:16,
              templateUrl:'',
              cssClass:'pt'
          }).then(function(res){
            console.log('你的密码是:'+res);
          })
      }
}])