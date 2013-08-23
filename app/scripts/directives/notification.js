(function() {
  'use strict';
  angular.module('App').directive('notification', function() {
    return {
      templateUrl: '/templates/notification-template',
      replace: true,
      link: function(scope, element, attrs) {}
    };
  });

}).call(this);
