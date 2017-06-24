app.controller('MainCtrl', function($scope, $document, $timeout, $mdSidenav, $log, $location, $rootScope) {
  $rootScope.isPath= function(viewLocation) {
    return viewLocation === $location.path();
  };
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');
  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
  $scope.cancel=function() {
    $mdDialog.cancel();
  };
});
