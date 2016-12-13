/**
 * Created by Administrator on 2016-12-07.
 */
var myweb=angular.module('myweb',['ngRoute']);
myweb.controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
    .controller('IndexController', function ($scope, $route) { $scope.$route = $route;})
    .controller('GuideController', function ($scope, $route) { $scope.$route = $route;})
    .controller('SafeController', function ($scope, $route) { $scope.$route = $route;})
    .controller('AboutusController', function ($scope, $route) { $scope.$route = $route;})
    .controller('MainController', function ($scope, $route) { $scope.$route = $route;})
    .controller('LoginController', function ($scope, $route) { $scope.$route = $route;})
    .config(function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'page/home.html',
                controller:'HomeController'
            })
            .when('/index',{
                templateUrl:'page/index.html',
                controller:'IndexController'
            })
            .when('/guide',{
                templateUrl:'page/guide.html',
                controller:'GuideController'
            })
            .when('/safe',{
                templateUrl:'page/safe.html',
                controller:'SafeController'
            })
            .when('/aboutus',{
                templateUrl:'page/aboutus.html',
                controller:'AboutusController'
            })
            .when('/main',{
                templateUrl:'page/main.html',
                controller:'MainController'
            })
            .when('/logo',{
                templateUrl:'page/home.html',
                controller:'LoginController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
