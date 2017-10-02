importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js");

var config = {
	apiKey: "AIzaSyDkTPmbup2qAhW_tccdeSV_mTXa5YMHJVg",
	authDomain: "fshare-6060e.firebaseapp.com",
	databaseURL: "https://fshare-6060e.firebaseio.com",
	storageBucket: "fshare-6060e.appspot.com",
	messagingSenderId: "156964308254"
};
var app = firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
	console.log('Notification permission granted.');
	return messaging.getToken();
})
.then(function(token){
	console.log(token)
})
.catch(function(err) {
	console.log('Unable to get permission to notify.', err);
}) 
 messaging.onMessage(function(payload){
 	console.log('payload:',payload);
 });