@domoferaapp = angular.module('domoferaapp', [
  'templates',
  'ngRoute',
  'controllers'
  ])

@domoferaapp.config(['$routeProvider', ($routeProvider) ->
  $routeProvider
      .when('/',
        templateUrl: "index.html"
        controller: 'HomeController'
      ).when('/users',
        templateUrl: "users/index.html"
        controller: 'UsersController'
      )
])





