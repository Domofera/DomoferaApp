controllers = angular.module('controllers',[])

user = angular.module('user',[
  'templates',
  'ngRoute',
  'controllers',
])

user.config([ '$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
        templateUrl: "login.html"
        controller: 'UserController'
      )
])

controllers.controller("UserController", [ '$scope',
  ($scope)->  

])