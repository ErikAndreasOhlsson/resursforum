// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "/templates/hem.html"
    })
    .when("/verksamhet", {
      templateUrl: "/templates/verksamhet.html"
    })
    .when("/kontakt", {
      templateUrl: "/templates/kontakt.html"
    })
    .when("/exempel", {
      templateUrl: "/templates/exempel.html"
    })
    .otherwise({
      templateUrl: "/templates/404.html"
    });

  $locationProvider.html5Mode(true);
}]);