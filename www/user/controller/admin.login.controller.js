angular.module('admin')
.controller('adminLoginCtrl', function($scope,$localStorage,$rootScope, $state, $ionicPopup){


var auth = firebase.auth();

$scope.facebookLogin = function(){

   var provider = new firebase.auth.FacebookAuthProvider();
   auth.signInWithPopup(provider).then(function(result) {
   var user = result.user;
   $localStorage.photo = user.photoURL;
   $localStorage.displayName = user.displayName;
  

  var uid = result.user.uid;
  $state.go('conversations');
}).catch(function(error) {
  console.log(error);
});
}
$scope.googleLogin = function(){

var provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider).then(function(result) {
  var accessToken = result.credential.accessToken;
  var user = result.user;
   $rootScope.photo = user.photoURL;
   $rootScope.displayName = user.displayName;

   $state.go('conversations');
});
}



//   if(ionic.Platform.isWebView()){

//     $cordovaFacebook.login(["public_profile", "email"]).then(function(success){

//       console.log(success);

//       ref.authWithOAuthToken("facebook", success.authResponse.accessToken, function(error, authData) {
//         if (error) {
//           console.log('Firebase login failed!', error);
//         } else {
//           console.log('Authenticated successfully with payload:', authData);
//         }
//       });

//     }, function(error){
//       console.log(error);
//     });

//   }
//   else {

//     ref.authWithOAuthPopup("facebook", function(error, authData) {
//       if (error) {
//         console.log("Login Failed!", error);
//       } else {
//         console.log("Authenticated successfully with payload:", authData);
//       }
//     });

//   }

// }

})
