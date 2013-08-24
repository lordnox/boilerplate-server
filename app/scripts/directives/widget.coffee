'use strict';

angular.module('App')
  .directive('widget', ->
    templateUrl: '/templates/widget-template'
    #restrict: 'A'
    replace: true,
    link: (scope, element, attrs) ->
  )