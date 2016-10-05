app.directive('frontpageBoxes', [function () {

  return {
    templateUrl: '/directives/frontpageBoxes.html',
    controller: ['$scope', function ($scope) {

      $scope.wells = [
        {
          title: 'Om oss',
          content: 'Företaget grundades i Lund 2006 av Christian Malm. Idag har vi kontor i Malmö och i Kristianstad och arbetar i hela södra Sverige...',
          // pic: 'images/temp/box1.png',
          url: '/om-oss'
        },
        {
          title: 'Verksamheter',
          content: 'Familjeinsatser, Marte Meo, Handledning och mentorskap, Personalförstärkning, Utredningar, Parsamtal, Familjehemsutredningar ',
          // pic: 'images/temp/box1.png',
          url: '/verksamhet'
        },
        {
          title: 'Kontakt',
          content: 'Vi har korta väntetider och finns centralt i Malmö. Välkommen att kontakta oss!',
          // pic: 'images/temp/box1.png',
          url: '/kontakt'
        }
      ];

      // make all wells fit on a single row
      $scope.colSize = Math.floor(24 / $scope.wells.length);


      // $(".pocket-well").click(function (e) {
      //   e.preventDefault();
      //   $("#well-pocket").toggleClass("hide");
      //   $(".pocket-well").toggleClass("up");
      //   $(".pocket-well").toggleClass("hvr-bob");
      // });

    }]
  };
}]);