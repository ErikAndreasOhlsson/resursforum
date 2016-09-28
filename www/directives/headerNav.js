app.directive('headerNav', [function () {

  return {
    templateUrl: '/directives/headerNav.html',
    controller: ['$scope', '$interval', function ($scope, $interval) {

      /*function currentTime() {
        $scope.currentTime = new Date();
      }
      currentTime();
      // update currentTime every 1 second
      // if we don't use angulars $interval
      // $scope wont realize that there is an updated value!
      $interval(currentTime, 1000);*/

      // Toggle NavBar
      $("#head-navbar-rf").click(function (e) {
        e.preventDefault();
        $("#head-navbar-rf").toggleClass("drop");
        $("#head-navbar-rf").toggleClass("hvr-hang");
        
        //------------------------------------------------------
        // FIXES FOR >>>ng-class="navCollapsed ? '' : 'in'"<<<
        //-----------------------------------------------------
        // if (navCollapsed = true) {
          // $("#head-navbar-rf").removeClass("hvr-hang");
          // $("#head-navbar-rf").className += " active";
          // $("#head-navbar-rf").toggleClass("active");
          // $("#head-navbar-rf").removeId("#");
        // }

        //------------------------------------------------------

      });

    }]
  };
}]);