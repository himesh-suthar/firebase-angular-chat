angular.module('admin')
.controller('adminNewBookingCtrl',['$scope','$state','adminFactory','ionicDatePicker','ionicTimePicker',function($scope,$state,adminFactory,ionicDatePicker,ionicTimePicker){

  $scope.doRefresh = function(){
    $scope.dates =new Array();
     $scope.times = new Array();
    $scope.x = null;     
    $scope.$broadcast('scroll.refreshComplete');

  }
  $scope.x = {};
   var ipObj1 = {
    callback: function (val) {  

      var val = new Date(val);
     
      $scope.x['fdate'] =val.getFullYear() + "/"+
      (val.getMonth()+1) + "/"+
      val.getDate();
    },
    disabledDates: [
    new Date("10-18-2016"),
    new Date("10-19-2016")

    ],
    
    inputDate: new Date(),      
    mondayFirst: true,                 
    closeOnSelect: false,       
    templateType: 'popup'       
  };

var ipObj2 = {
    callback: function (val) {  
      var val = new Date(val);
      $scope.x['tdate'] =val.getFullYear() + "/"+
      (val.getMonth()+1) + "/"+
      val.getDate();
    },
    disabledDates: [
    new Date("10-18-2016"),
    new Date("10-19-2016")

    ],
    inputDate: new Date(),      
    mondayFirst: true,                 
    closeOnSelect: false,       
    templateType: 'popup'       
  };

  $scope.openDatePicker = function(){
    ionicDatePicker.openDatePicker(ipObj1);
  };

  $scope.openDatePicker1 = function(){
    ionicDatePicker.openDatePicker(ipObj2);
  };


  var ipObj3 = {
    callback: function (val) {      
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        $scope.x['ftime'] = selectedTime.getUTCHours()+'H :'+selectedTime.getUTCMinutes()+'M';
        
       }
    },
    inputTime: 50400,
    format: 12,      
    step: 1,        
    setLabel: 'Set' 
  };

  var ipObj4 = {
    callback: function (val) {      
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        $scope.x['ttime'] = selectedTime.getUTCHours()+'H :'+selectedTime.getUTCMinutes()+'M';
             }
    },
    inputTime: 50400,
    format: 12,      
    step: 1,        
    setLabel: 'Set' 
  };

  $scope.openTimePicker = function(){
    ionicTimePicker.openTimePicker(ipObj3);
  };

  $scope.openTimePicker1 = function(){
    ionicTimePicker.openTimePicker(ipObj4);
  };

  $scope.doBooking = function(x){
    console.log(x);
    adminFactory.newBooking(x)
    .then(function(response){
      $state.go('home');
      
      console.log("booked");
    },function(error){
      console.log(error);
    });

  }

}]);
