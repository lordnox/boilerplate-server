'use strict';

angular.module('App')
  .directive('smallChatWidget', ->
    templateUrl: '/templates/small-chat-template'
    replace: true
    scope:
      messages: '='
    link: (scope, element, attrs) ->
  )
