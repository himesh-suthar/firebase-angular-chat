angular.module('fshare')
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('login',{
		url : '/login',
		templateUrl : 'user/view/login.html',
		controller : 'adminLoginCtrl'
	})

	.state('conversations',{
		url : '/conversations',
		templateUrl : 'user/view/conversations.html',
		controller : 'adminConversationCtrl'
	})
	.state('home',{
		url : '/conversation/:room',
		templateUrl : 'user/view/home.html',
		controller : 'adminHomeCtrl'
	})
	 .state('newBooking',{
		url : '/newBooking',
		templateUrl : 'user/view/newBooking.html',
		controller : 'adminNewBookingCtrl'
	})
	.state('chat',{
		url : '/chat',
		templateUrl : 'user/view/chat.html',
		controller : 'adminChatCtrl'
	})
		.state('lazyload',{
		url : '/lazyload',
		templateUrl : 'user/view/lazyload.html',
		controller : 'lazyloadCtrl'
		
	})



	$urlRouterProvider.otherwise('/lazyload');

	}]);
