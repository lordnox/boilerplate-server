(function() {
  'use strict';
  angular.module('App').controller('mainController', function($scope) {
    $scope.flashMessages = [
      {
        type: 'Info'
      }
    ];
    return $scope.recentMessages = [
      {
        img: 'img/1.jpg',
        sender: 'Jane Hew',
        text: 'Hey, John! How is it going? ...'
      }, {
        img: 'img/2.jpg',
        sender: 'Alies Rumiancaŭ',
        text: 'I\'ll definitely buy this template'
      }, {
        img: 'img/3.jpg',
        sender: 'Michał Rumiancaŭ',
        text: 'Is it really Lore ipsum? Lore ...'
      }
    ];
  });

}).call(this);
