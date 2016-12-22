// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

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
    templateUrl:'./template/sidemenu-menu.html',
    controller:'AppCtrl'
  })

  .state('app.search',{
    url:'/search',
    views:{
      'menuContent':{
        templateUrl:'./template/sidemenu-search.html',
        controller:'searchCtrl'
      }
    }
  })
   .state('app.tabs',{
    url:'/tabs',
    views:{
      'menuContent':{
        templateUrl:'templates/tabs.html',
      }
    }
  })
  .state('app.browse',{
    url:'/browse',
    views:{
      'menuContent':{
        templateUrl:'templates/tabs.html',
        controller:'browseCtrl'
      }
    }
  })

  .state('app.playlists',{
    url:'/playlists',
    views:{
      'menuContent':{
        templateUrl:'./template/sidemenu-playlists.html',
        controller:'playlistsCtrl'
      }
    }
  })

  .state('app.playdetails',{
    url:'/playlists/:playId',
    views:{
      'menuContent':{
        templateUrl:'./template/sidemenu-playdetails.html',
        controller:'playDetailsCtrl'
      }
    }
  })
  .state('app.about',{
    url:"/about",
    views:{
      "menuContent":{
        templateUrl:'templates/about.html',
      }
    }
  })
  .state('app.navstack',{
    url:"/navstack",
    views:{
      "menuContent":{
        templateUrl:'templates/navstack.html',
      }
    }
  })
   .state('app.connect',{
    url:"/connect",
    views:{
      "menuContent":{
        templateUrl:'templates/connect.html',
      }
    }
  })
  $urlRouterProvider.otherwise('/app/playlists')
})

.factory('getData',function(){
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
      get:function(playId){
          for(var i=0;i<chats.length;i++){
            if(chats[i].id==playId){
              return chats[i];
            }
          }
          return null;
      }
    }
})

.controller('playlistsCtrl',['$scope','getData',function($scope,getData){

    $scope.playlists = getData.all();

}])

.controller('playDetailsCtrl',['$scope','$stateParams','getData',
  function($scope,$stateParams,getData){

    $scope.playData  = getData.get($stateParams.playId);

}])

.controller('AppCtrl',['$scope','$ionicModal','$timeout',
  function($scope,$ionicModal,$timeout){

    $ionicModal.fromTemplateUrl('./template/sidemenu-login.html',{
      scope:$scope,
      animation:'slide-in-up',
    }).then(function(modal){
        $scope.modal = modal;
    })


    $scope.login = function(){
      $scope.modal.show();
    }

    $scope.hideModal = function(){
      $timeout(function(){
        $scope.modal.hide();
      },400)
    }
  }])

.controller('searchCtrl',['$scope','$cordovaCamera',function($scope,$cordovaCamera){

  $scope.getPic = function(){
    console.log('goCamera');
       var options = {                                            //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
        // quality: 50,                                            //相片质量0-100
        destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
        sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
        // allowEdit: false,                                        //在选择之前允许修改截图
        // encodingType:Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
        // targetWidth: 200,                                        //照片宽度
        // targetHeight: 200,                                       //照片高度
        // mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
        cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
        // popoverOptions: CameraPopoverOptions,
        // saveToPhotoAlbum: true  ,                                 //保存进手机相册
      };

      // $cordovaCamera.getPicture(options).then(function(imageData){
      //   alert(imageData);
      //   $scope.photoSrc = imageData;
      //   // "data:image/jpeg;base64,"
      // },function(error){
      //   alert('拍照失败!');
      // })
      $cordovaCamera.getPicture(options).then(function(imageData) {
          // CommonJs.AlertPopup(imageData);
          // var myImg = document.getElementById('photoImg');
          // alert(myImg);
            // myImg.style.backgroundImage = "url(data:image/jpeg;base64," + imageData+")";
            // myImg.style.backgroundSize = "cover";
          // myImg.src = imageData;
          $scope.photoSrc = imageData;

          // alert(myImg.src)
      },function(err) {
          // error
         alert("拍照失败！");
      });
  }
}])
.controller('browseCtrl',['$scope','$cordovaBarcodeScanner',
  function($scope,$cordovaBarcodeScanner){

    $scope.scanBarcode = function(){
      alert('扫描开始!')
      console.log(123);
        // 1
        $cordovaBarcodeScanner.scan().then(function(imageData){

        alert(imageData.text);

        console.log("Barcode Format -> " + imageData.format);

        console.log("Cancelled -> " + imageData.cancelled);

        }, function(error) {

        console.log("An error happened -> " + error);
        alert('扫描失败!')

        });
        // $ionicPlatform.ready(function(){
            // if(window.cordova && window.cordova.plugins.barcodeScanner){
              alert(123);
              // cordova.plugins.barcodeScanner.scan().then(function(imageData){
              //   alert(imageData.text);
              // },function(error){
              //   alert('扫码出错'+error);
              // })
            // }
        // })
    }
}])


