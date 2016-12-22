 angular.module('starter.controllers',[])
 .controller('tabsController',[ '$scope','$rootScope',
  function($scope,$rootScope){
      $scope.tabName = '职员表'
      // $scope.onTabsSelect = function(){
      //   $scope.tabName = '职员列表'
      //    // console.log($scope.selectIndex);
      //    $scope.$broadcast('select','职员详细列表')
      // }
      $rootScope.onTabsSelect = function(){
        $scope.titleList = '职员列表'
         // console.log($scope.selectIndex);
         $scope.$broadcast('select','职员详细列表')
      }
      // $rootScope.onTabsSelect1 = function(){
      //   $scope.titleList = '首页'
      // }
      // $rootScope.onTabsSelect2 = function(){
      //   $scope.titleList = '我的'
      // }
      $scope.onTabsDeselect = function(){
         console.log('离开')
      }
 }])
 .controller('detailController',['$scope','$stateParams',function($scope,$stateParams){
        // console.log('detailController');
        // console.log($stateParams.id);
       ;
        // $scope.num = $stateParams.id;
        $scope.num = 'Detail';
        $scope.order =  $stateParams.Detalid;
 }])
 .controller('ListController',['$scope','$ionicScrollDelegate',
  '$http','$timeout','$rootScope',
  function($scope,$ionicScrollDelegate,$http,$timeout,$rootScope){
   
    $scope.titleList = '职员';
    $scope.$on('select',function(e,data){
        $scope.titleList = data;
    })
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

 .controller('MyController',['$scope','$ionicTabsDelegate',
  function($scope,$ionicTabsDelegate){
    $scope.titleList = '个人页'
    $scope.showTabsFlag = true;
    //获取tabs索引
    $scope.getIndex = function(){
        var oIndex = $ionicTabsDelegate.selectedIndex();
        console.log(oIndex);
    }
    //进入tabs
    $scope.gotoIndex = function(index){
       $ionicTabsDelegate.select(index,true)
    }
    //显示隐藏tabs
    $scope.showHideTabs = function(){
      $ionicTabsDelegate.$getByHandle('tabs').showBar(!$scope.showTabsFlag);
       $scope.showTabsFlag = !$scope.showTabsFlag;
    }
    
 }])
 .controller('homeController',['$scope',function($scope){
  $scope.titleList = '首页'
 }])