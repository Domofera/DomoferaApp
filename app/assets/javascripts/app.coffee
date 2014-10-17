app.config([ '$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
        templateUrl: "index.html"
        controller: 'HomeController'
      )
      .when('/login',
        templateUrl: "login.html"
        controller: 'UserController'
      )
])



