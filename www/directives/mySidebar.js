// loads in ui bootstrap accordion
app.directive('mySidebar', [function () {

  return {
    templateUrl: '/directives/mySidebar.html',
    controller: ['$scope', function($scope) {
      $scope.oneAtATime = true;

      // this data should come from our backend
      // using $resource!
      $scope.faqs = [
        {
          title: 'Can I haz banana?',
          content: 'No'
        },
        {
          title: 'Can I haz pineapple?',
          content: 'Maybe'
        },
        {
          title: 'Can I haz angular?',
          content: 'Absolutely!'
        },
        {
          title: 'Can I haz Bootstrap.js?',
          content: 'NEVER!'
        }
      ];

    }]
  };
}]);