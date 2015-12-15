'use strict';

/**
*
** VIEW
*
**/

sampleApp.directive('viewDashboardsProject', [function() {

	return {
		restrict: 'E',
		templateUrl: 'views/templates/viewdashboardsproject.html',
		replace: true
	};

}]);

/**
*
** COMPONENTS
*
**/

sampleApp.directive('mdAccordionCustom', [function() {

	return {
		restrict: 'A',
		scope: {
			mdAccordionCustom: '=',
			mdAccordionCustomClass: '@'
		},
		link: function(scope, elem, attrs) {
			elem.addClass('md-accordion-custom');
			scope.$watch('mdAccordionCustom', function() {
				elem.animate({
					height: 'toggle'
				}, 300);
			});
		}
	};

}]);

sampleApp.directive('mdSlideBoxCustom', [function() {

	return {
		restrict: 'E',
		scope: {
			activeSlide: '=',
			slideBoxWidth: '=',
			slideBoxTargetWidth: '@'
		},
		link: function(scope, elem, attrs) {
			console.log('activeSlide', scope.activeSlide);
			console.log('slideBoxWidth', scope.slideBoxWidth);

			var test = angular.element(document.querySelectorAll(scope.slideBoxTargetWidth));

			console.log('test', test);

			console.log('test 2', document.querySelectorAll(scope.slideBoxTargetWidth)[0].clientWidth);

			console.log('slideBoxTargetWidth', scope.slideBoxTargetWidth);
			console.log('slideBoxTargetWidth Width', $(scope.slideBoxTargetWidth));

			elem.css({
				width: scope.slideBoxWidth,
				background: 'blue',
				overflow: 'hidden'
			});

			elem.children().css({
				width: scope.slideBoxWidth,
				height: '100px',
				background: 'red',
				float: 'left'
			});
		}
	};

}]);

sampleApp.directive('mdTabContent', [function() {

	return {
		restrict: 'E',
		link: function(scope, elem, attrs) {
			// console.log('mdTabContent', elem);
			elem.attr('ng-scrollbars', '');
			elem.attr('ng-scrollbars-config', '{axis: \'y\'}');

			$.fn.hasScrollBar = function() {
		        return this.get(0).scrollHeight > this.height();
		    }

			var hasScrollBar = elem.hasScrollBar();

			console.log('hasScrollBar', hasScrollBar);
		}
	};

}]);
