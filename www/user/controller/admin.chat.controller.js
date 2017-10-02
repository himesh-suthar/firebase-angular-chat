angular.module('admin')
.controller('adminChatCtrl', function($scope, $state, $ionicPopup, Messages) {
 
  $scope.messages = Messages;
 
  $scope.addMessage = function() {
 
   $ionicPopup.prompt({
     title: 'Need to get something off your chest?',
     template: 'Let everybody know!'
   }).then(function(res) {
      $scope.messages.$add({
        "message": res
      });
   });
  };
 
  $scope.logout = function() {
    var ref = new Firebase("https://fshare-6060e.firebaseio.com");
    ref.unauth();
    $state.go('login');
  };
 
})