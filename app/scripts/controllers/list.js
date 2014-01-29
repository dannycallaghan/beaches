'use strict';

angular.module('beachesApp')
	.controller('ListController', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	})

	.directive('beach', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				console.log(scope, iElement, iAttrs	);
			},
			templateUrl: '/partials/beach.html' 
		};
	}]);