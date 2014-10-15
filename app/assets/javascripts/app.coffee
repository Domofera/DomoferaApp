home = angular.module('home',[
  'templates',
  'ngRoute',
  'controllers',
])

home.config([ '$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
        templateUrl: "index.html"
        controller: 'HomeController'
      )
])

controllers = angular.module('controllers',[])
controllers.controller("HomeController", [ '$scope',
  ($scope)->
])