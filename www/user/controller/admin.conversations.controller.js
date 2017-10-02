angular.module('admin')
.controller('adminConversationCtrl',['$scope','$compile','$state','$rootScope','adminFactory',function($scope,$compile,$state,$rootScope,adminFactory){

  $scope.doRefresh = function(){

    $scope.$broadcast('scroll.refreshComplete');

  }
 var database = app.database();
  

   var childs = database.ref();
 $scope.rooms = [];
  var i = 0;
  childs.on('child_added',function(snapshot){
  $scope.childs = snapshot.val();
  // console.log($scope.childs[1]);
  // console.log($scope.childs);
  var r = $scope.childs[1];
  console.log(r);
  console.log();
  $scope.rooms.push($scope.childs[1]);
  console.log($scope.rooms);
  i+=1;
  var myEl = angular.element( document.querySelector( '#one' ) );
  var template = '<a style="cursor: pointer; cursor: hand;" ng-click ="stateChanged('+i+') "><div class="w3-center">'+'<b style="font-size:16px;"border-radius: 25px; background: #E0DEDE;  padding: 15px; ">'+$scope.childs[1]+'</b></div> </a></div>';
  var temp = $compile(template)($scope);
  myEl.append(temp);
})
// childs.on('child_removed',function(snapshot){
//   $scope.childs = snapshot.val();
//   // console.log($scope.childs[1]);
//   // console.log($scope.childs);
//   var r = $scope.childs[1];
//   console.log(r);
//   console.log();
//   $scope.rooms.push($scope.childs[1]);
//   console.log($scope.rooms);
//   i+=1;
//   var myEl = angular.element( document.querySelector( '#one' ) );
//   var template = '<a style="cursor: pointer; cursor: hand;" ng-click ="stateChanged('+i+') "><div class="w3-center">'+'<b style="font-size:16px;"border-radius: 25px; background: #E0DEDE;  padding: 15px; ">'+$scope.childs[1]+'</b></div> </a><div><button class="button button-block button-dark" ng-click="deleteChatroom('+i+')">Delete Room</button></div>';
//   var temp = $compile(template)($scope);
//   myEl.append(temp);
// })
$scope.stateChanged = function(room){
var index = room - 1;
var chatRoom = $scope.rooms[index];
  $state.go('home',{room : chatRoom}); 
}
$scope.deleteChatroom = function(room){
var index = room - 1;
var chatRoom = $scope.rooms[index];
database.ref().child(chatRoom).remove();

}

$scope.addConversation = function(){
  
$scope.room = $scope.chatroom.replace(/\s+/g, '-').toLowerCase();

  var databaseRef = database.ref().child($scope.room).set({
    1 : $scope.room
  });

  $scope.chatroom = null;

}
//   $scope.addMessage = function(){
//    var chat = new FirechatUI(databaseRef, $rootScope.displayName);

//    var chat = {
//     name : $rootScope.displayName,
//     message  : $scope.msg
//   } ;
//   databaseRef.push().set(chat);
//   $scope.msg = null;
// }

// databaseRef.on('child_added',function(snapshot){
//   $scope.chat = snapshot.val();
//   var myEl = angular.element( document.querySelector( '#one' ) );
//   myEl.append('<b style="color:blue">'+$scope.chat.name+'</b>'+'<br/>'+'<div style = "border-radius: 25px; background: #E0DEDE;  padding: 15px; ">'+$scope.chat.message+'</div>'+'<br/>');
// })

// $scope.handleFile = function(){
//   var storageRef  = storage.ref().child('chat_photos');
//   var photoRef = storageRef.child($scope.myPhoto.name);
//   var uploadTask =  photoRef.put($scope.myPhoto);

//   uploadTask.on('state_changed',null,null,function(){
//     var downloadUrl = uploadTask.snapshot.downloadURL;
//     $scope.msg='<img src='+downloadUrl+' height="250px" width="250px">';
//     $scope.myPhoto = null;
//     console.log($scope.msg);


//   })
// }


}]);
