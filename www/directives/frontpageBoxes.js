app.directive('frontpageBoxes', [function () {

  return {
    templateUrl: '/directives/frontpageBoxes.html',
    controller: ['$scope', function ($scope) {

      $scope.wells = [
        {
          title: 'Om oss',
          content: 'Aliquam finibus purus vitae ipsum aliquam, vitae blandit lectus aliquet. Phasellus dignissim porta placerat. Nulla facilisi.',
          pic: 'images/temp/box1.png',
          url: '/'
        },
        {
          title: 'Verksamheter',
          content: 'Morbi nibh dui, porttitor vel sagittis vel, porttitor nec dolor. Duis cursus porttitor neque, sagittis scelerisque est commodo quis.',
          pic: 'images/temp/box1.png',
          url: '/verksamhet'
        },
        {
          title: 'Kontakt',
          content: 'Pellentesque a bibendum nisi. In dignissim est tortor, vitae iaculis nunc gravida et. Mauris venenatis libero eget risus sollicitudin euismod ut sed mi.',
          pic: 'images/temp/box1.png',
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