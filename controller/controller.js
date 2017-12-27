var sih = angular.module('sih',['ngRoute','ngAnimate']);

sih.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){



  $routeProvider
  .when('/home',{
    templateUrl: 'view/home.html',
    controller:'sihController'
  })
  .when('/contact',{
    templateUrl: 'view/contact.html',
    controller: 'sihController'
  })
  .when('/contact-success',{
    templateUrl: 'view/contact-success.html',
    controller: 'sihController'
  })
  .when('/directory',{
    templateUrl: 'view/directory.html',
    controller: 'sihController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);



sih.controller('sihController',['$scope','$http',function($scope, $http){


}]);
