app.directive('appSidebar', [function(){

  return {
    templateUrl: '/directives/appSidebar.html',
    controller: ['$scope', function($scope) {
      $scope.title = "App Sidebar";
      $scope.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      $scope.links = [
        {
          url: '/somewhere',
          title: 'Somewhere'
        },
        {
          url: '/somewhere-else',
          title: 'Somewhere else'
        },
        {
          url: '/nowhere',
          title: 'Nowhere'
        }
      ];
    }]
  };
}]);