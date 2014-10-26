@domoferaapp = angular.module('domoferaapp', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
  'angular-flash.service',
  'angular-flash.flash-alert-directive'
  ])

@domoferaapp.config(['$routeProvider','flashProvider',
  ($routeProvider, flashProvider) ->

    flashProvider.errorClassnames.push('alert-danger')
    flashProvider.warnClassnames.push('alert-warning')
    flashProvider.infoClassnames.push('alert-info')
    flashProvider.successClassnames.push('alert-success')

    $routeProvider
        .when('/',
          templateUrl: "index.html"
          controller: 'HomeController'
        ).when('/users',
          templateUrl: "users/index.html"
          controller: 'UsersController'
        ).when('/users/new',
          templateUrl: "users/new.html"
          controller: "UsersController"
        )
])

controllers = angular.module('controllers', [])
