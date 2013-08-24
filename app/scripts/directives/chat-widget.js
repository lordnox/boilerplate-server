(function() {
  'use strict';
  angular.module('App').directive('smallChatWidget', function() {
    return {
      templateUrl: '/templates/small-chat-template',
      replace: true,
      scope: {
        messages: '='
      },
      link: function(scope, element, attrs) {}
    };
  });

}).call(this);
