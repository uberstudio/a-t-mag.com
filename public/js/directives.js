'use strict';

/* Directives */

angular.module('atMag.directives', []).
    directive('imageLoader', function() {
	return {
            restrict: 'A',
            link: function(scope, element, attrs) {
		element.bind('load', function() {
	            scope.imageloading = false;
	            scope.$apply();
		});
            }
	};
    });
