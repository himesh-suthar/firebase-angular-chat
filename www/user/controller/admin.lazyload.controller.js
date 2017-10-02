angular.module('admin')
.controller('lazyloadCtrl',['$scope','$cordovaFlashlight',function($scope,$cordovaFlashlight){


	$scope.items = [
    { id: 1, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 2, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 3, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 4, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 5, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 6, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 7, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 8, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 9, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 10, image: 'http://lorempixel.com/400/200/sports/' },
    { id: 11, image: 'http://lorempixel.com/400/200/sports/' }
  ];
 $cordovaFlashlight.available().then(function(availability) {
    var avail = availability; // is available
  }, function () {
    // unavailable
  });

  $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.switchOff()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
}])