'use strict';

angular.module('App')
  .directive('notification', ->
    templateUrl: '/templates/notification-template'
    #restrict: 'A'
    replace: true,
    link: (scope, element, attrs) ->
  )