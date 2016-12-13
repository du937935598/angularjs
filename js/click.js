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
                    window.location.reload();
                });
            }
        }
    }])
    .filter('unique', function () {//封装方法为了筛选重复的数据
        return function (collection, keyname) {
            var output = [],
                keys = [];
            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            return output;
        };
    });
