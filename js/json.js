/**
 * Created by Administrator on 2016-12-13.
 */
myweb.controller('HomeController',function($scope,$http){
        $http.get('JSON/sites.php')
            .success(function(response){
                $scope.names=response.sites;
                $scope.names_other=response.itemsa;
            });
    })
    .controller('IndexController',function($scope,$http){
        $http.get('JSON/data.json')
            .success(function(data,status,headers,config){
                $scope.datas=data.data.list;
                $scope.filterType = '';
                $scope.showType = function(type){
                    $scope.filterType = type;
                }
            })
            .error(function(data,status,headers,config){
                console.log('listCtrl Error!');
            })
    })
    .controller('GuideController',function($scope,$http){
        $http.get('JSON/data.json')
            .success(function(data,status,headers,config){
                $scope.datas=data.data.list;
                $scope.filterType = '';
                $scope.showType = function(type){
                    $scope.filterType = type;
                }
            })
            .error(function(data,status,headers,config){
                console.log('listCtrl Error!');
            })
    })
