(function() {
  'use strict';
  angular.module('App').directive('widget', function() {
    return {
      templateUrl: '/templates/widget-template',
      replace: true,
      link: function(scope, element, attrs) {}
    };
  });

}).call(this);
