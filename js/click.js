/**
 * Created by Administrator on 2016-12-07.
 */
myweb.run(['$rootScope',function($rootScope){
        $rootScope.nativeId=getCurrentNativeId();
        function getCurrentNativeId(){
            var str = "#/home";
            var href=window.location.href;
            var index = href.indexOf("#/");
            if(index != -1){
                str = href.substring(index,href.length);
            }
            return str;
        }
    }])
    .directive('native',['$rootScope',function($rootScope,$cookies){
        return{
            restrict:'A',
            link:function(scope,element,attrs){
                $(element).click(function(){
                    scope.$apply(function(){
                        $rootScope.nativeId = attrs.href;

                    });
                });
            }
        }
    }])
    .controller('HomeController',function($scope,$http){
        $http.get('JSON/sites.php')
            .success(function(response){
                $scope.names=response.sites;
                $scope.names_other=response.itemsa;
            });
        function changeClass(){
            $scope.className = true/false;
        }
    });
