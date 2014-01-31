'use strict';

angular.module('beachesApp')
	.directive('beach', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				//console.log(scope, iElement, iAttrs	);
			},
			templateUrl: '/partials/beach.html' 
		};
	}]);