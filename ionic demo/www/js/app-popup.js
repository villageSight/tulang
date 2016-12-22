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
.controller('popupController',['$scope','$ionicPopup','$timeout'
,  function($scope,$ionicPopup,$timeout){
      //自定义popup
      $scope.showPopup = function(){
         $scope.data = {}
        var myPopup =  $ionicPopup.show({
             template:'<input type="password" ng-model="data.wifi"/>',
             title:'请输入密码',
             subTitle:'8位字母数字',
             scope:$scope,
             buttons:[{
               text:'<b>取消</b>',
               type:'button-energized',
             },{
             text:'<b>保存</b>',
             type:'button-positive',
             onTap:function(e){
              if(!$scope.data.wifi){
                 e.preventDefault();
              }else{
                return $scope.data.wifi;
              }
             }
           }]
         });

        myPopup.then(function(res){
           console.log('你输入的密码是:'+res);
        });

        $timeout(function(){
          myPopup.close();
        },3000)
      }
      //alert 
      $scope.showAlert = function(){
        var alertPopup = $ionicPopup.alert({
          title:'警告',
          subTitle:'必须提示所有的人',
          template:'这个看起来很诱人,但千万不要吃，有毒！',
          okText:'知道了',
          okType:'button-assertive',
          cssClass:'as',
          templateUrl:''
        })

        alertPopup.then(function(res){
          console.log('已经确定'+res);
        })
      }

      //comfirm

      $scope.showConfirm = function(){
        var confirnPopup = $ionicPopup.confirm({
          title:'提示',
          subTitle:'删除不能重复,请重复！',
          okText:'确定',
          okType:'button-energized',
          cancelText:'取消',
          cancelType:'button-dark',
          template:"你确定要删除吗？",
          templateUrl:'',
          cssClass:'as',

        })

        confirnPopup.then(function(res){
            if(res){
              console.log('是的，删除了')
            }else{
              console.log('点错了。。。')
            }
        })
      }

      // prompt

      $scope.showPrompt =function(){
        var promptPopup = $ionicPopup.prompt({
          title:'密码验证',
          template:'请输入你的密码',
          inputType:'password',
          inputPlaceholder:'6-12位',
          defaultText:'abc123',
          maxLength:16,
          okText:'确定',
          okType:'button-energized',
          cancelText:'取消',
          cancelType:'button-dark',
        }).then(function(res){
          console.log(res);
        })
      }
}])