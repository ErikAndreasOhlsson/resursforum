// directive that loads ui bootstraps carousel
app.directive('myCarousel', [function () {

  return {
    templateUrl: '/directives/myCarousel.html',
    // template: '<div>Hej!</div>'
    controller: ['$scope', function ($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: 'images/nyheter/nyhet ' + (currIndex + 1) + '.jpg',
          text: ['I början av juni kommer vår verksamhetschef Titte Hallin att gå vidare mot nya utmaningar. Hon kommer att inleda med tjänstledighet i sex månader och under tiden vikarierar Nina Smith som ansvarig för familjeinsatserna. Vi tackar Titte för alla år och hos oss och önskar henne lycka till!', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
          id: currIndex++
        });
      };

      // $scope.addSlide = function () {
      //   var newWidth = 600 + slides.length + 1;
      //   slides.push({
      //     image: 'http://lorempixel.com/' + newWidth + '/300',
      //     text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
      //     id: currIndex++
      //   });
      // };

      // $scope.addSlide = function () {

      //   slides.push({
      //     imageStyle: {
      //       'background-image': 'url(/images/nyheter/nyhet' + (currIndex + 1) + '-1.jpg)'
      //     },
      //     text: [/*'Nice image','Awesome photograph','That is so cool','I love that'*/][slides.length % 4],
      //     id: currIndex
      //   });
      //   currIndex++;
      // };

      for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }
    }]
  };
}]);