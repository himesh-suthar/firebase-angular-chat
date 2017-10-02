angular.module('admin',[]);
angular.module('fshare',['ionic','admin','firebase', 'ngCordova','ngStorage','ionicLazyLoad'])
.factory('Messages', function($firebaseArray) {
  var messagesRef = new Firebase("https://fshare-6060e.firebaseio.com");
  return $firebaseArray(messagesRef);
});


