'use strict';

/**
* @ngdoc function
* @name angularMaterialSampleApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularMaterialSampleApp
*/
angular.module('angularMaterialSampleApp')
.controller('MainCtrl', function ($rootScope, $scope, $mdSidenav) {

  $rootScope.viewportWidth = $(window).width();
  $rootScope.viewportHeight = $(window).height();

  $(window).resize(function() {
    $scope.$apply(function() {
      $rootScope.viewportWidth = $(window).width();
      $rootScope.viewportHeight = $(window).height();
    });
  });

  var vm = this;

  // vm.toggleSidenav('side-nav');

  vm.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  vm.isOpenLeft = function(){
    return $mdSidenav('left').isOpen();
  };

});
