angular.module('admin')
.factory('adminFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
  var obj={};

  // obj.newBooking = function(x){
  //   console.log(x);
  //    var defer = $q.defer();
  //   $http.post($rootScope.serverUrl+"newBooking.php",x)
  //   .then(function(success){
  //     defer.resolve(success);
  //   },function(err){
  //     defer.reject(err);
  //   });
  //   return defer.promise;
  // }
  // obj.getBookings = function(){
  //   var defer = $q.defer();

  //   $http.get($rootScope.serverUrl+"getBookings.php")
  //   .then(function(success){
  //     defer.resolve(success);
  //   },function(err){
  //     defer.reject(err);
  //   });
  //   return defer.promise;
  // }

  return obj;
}])
.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;

                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }])

.service('fileUpload', ['$http', function ($http) {

         }]);
