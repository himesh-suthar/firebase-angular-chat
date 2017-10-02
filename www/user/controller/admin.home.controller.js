angular.module('admin').controller('adminHomeCtrl',['$scope','$localStorage','$state','$rootScope','$stateParams','adminFactory',function($scope,$localStorage,$state,$rootScope,$stateParams,adminFactory){var room = $stateParams.room;console.log(room);  $scope.doRefresh = function(){    $scope.$broadcast('scroll.refreshComplete');  }  var database = app.database();  var storage = app.storage();    var databaseRef = database.ref().child(room);  var childs = database.ref();   childs.on('child_added',function(snapshot){  $scope.childs = snapshot.val();  console.log($scope.childs)  // var myEl = angular.element( document.querySelector( '#one' ) );  // myEl.append('<b style="color:blue">'+$scope.chat.name+'</b>'+'<br/>'+'<div style = "border-radius: 25px; background: #E0DEDE;  padding: 15px; ">'+$scope.chat.message+'</div>'+'<br/>');})$scope.photo = $localStorage.photo;  $scope.addMessage = function(){   var chat = new FirechatUI(databaseRef, $localStorage.displayName);   var chat = {    name : $localStorage.displayName,    message  : $scope.msg  } ;  databaseRef.push().set(chat);  $scope.msg = null;}databaseRef.on('child_added',function(snapshot){  $scope.chat = snapshot.val();  var myEl = angular.element( document.querySelector( '#one' ) );  myEl.append('<b style="color:blue">'+$scope.chat.name+'</b>'+'<br/>'+'<div style = "border-radius: 25px; background: #E0DEDE;  padding: 15px; ">'+$scope.chat.message+'</div>'+'<br/>');})$scope.handleFile = function(){  var storageRef  = storage.ref().child('chat_photos');  var photoRef = storageRef.child($scope.myPhoto.name);  var uploadTask =  photoRef.put($scope.myPhoto);  uploadTask.on('state_changed',null,null,function(){    var downloadUrl = uploadTask.snapshot.downloadURL;    $scope.msg='<img src='+downloadUrl+' height="250px" width="250px">';    $scope.myPhoto = null;    console.log($scope.msg);  })}}]);