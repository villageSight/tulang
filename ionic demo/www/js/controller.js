angular.module('starter.contro',[])
.controller('tabController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.tabName = '职员列表';
	// $scope.onTabSelect =function(){
	// 	$scope.tabName = '职员表';
	// 	$scope.$broadcast('select','职员信息列表');
	// } 
	$rootScope.onTabSelect =function(){
		$scope.tabName = '职员表';
		$scope.$broadcast('select','职员信息列表');
	} 
	$rootScope.onTabDeselected = function(){
		console.log('离开');
	}
}])
 .controller('ListController',['$scope','$http','$timeout',function($scope,$http,$timeout){
    $scope.title = '职员000'
    $scope.$on('select',function(e,data){
    	$scope.title = data;
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

    $scope.doRefresh =function(){
      $http.get('./mock/new-items.json')
      .success(function(data){
        $scope.items = data;
      })
      .finally(function(){

        $scope.$broadcast('scroll.refreshComplete')
      })
    }
    $scope.doPulling = function(){
      console.log('pulling...')
    }

    $scope.$on('scroll.refreshComplete',function(){
      console.log('srcoll complete~~')
    })
    

    
    $scope.loadMore = function(){
      $timeout(function(){
        $http.get('./mock/more-items.json')
        .success(function(data){
          console.log(123);
            $scope.items = $scope.items.concat(data);
            $scope.$broadcast('scroll.infiniteScrollComplete')
        })
      },2000)
    }
    $scope.$on('scroll.infiniteScrollComplete',function(){
      console.log('load complete')
    })
  }])


.controller('MyController',['$scope','$ionicTabsDelegate' ,function($scope,$ionicTabsDelegate){
	$scope.isShowTabs = true;
	$scope.getIndex = function(){
		var i  = $ionicTabsDelegate.selectedIndex();
		console.log(i);
	}

	$scope.gotoList = function(index){
		$ionicTabsDelegate.select(index);
		console.log(123);
	}

  
	$scope.showHideTabs = function(){
		$ionicTabsDelegate.$getByHandle('tabs').showBar(!$scope.isShowTabs);
		$scope.isShowTabs = !$scope.isShowTabs;
	}
}])