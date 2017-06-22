app.controller('HomeCtrl', function($scope,$document,$timeout, $mdSidenav, $log) {

$scope.chances = [
          "Chance to meet international artists",
          "RDV Merchandise and Pronite passes",
          "The coveted Campus Ambassador Certificate authenticating your work for Rendezvous, IIT Delhi",
          "Discount coupons for eating joints",
          "Exposure",
          "Internship opportunity Look at possiblities",
          "Passes and discount coupons as per marketing deals"
];

$scope.animation = {};
  $scope.animation.current = 'fadeInUp';
  $scope.animation.previous = $scope.animation.current;
  $scope.ElementIn = function($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated ' + $scope.animation.current);
	};
	$scope.animateElementOut = function($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated ' + $scope.animation.current);
	};

});

app.controller('MainCtrl', function($scope,$document,$timeout, $mdSidenav, $log) {



});
