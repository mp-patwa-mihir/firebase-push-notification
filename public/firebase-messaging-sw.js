importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': 'BHldZTLzvcUTC_yGlNn3QDoiHdnV-2Y6XzpIq11Zts7nG3_9skej-8hC5TH--J_OH2j5hEacyMxRO6Ghj-b5l98'
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 console.log('[firebase-messaging-sw.js] Received background message ', payload);
 const notificationTitle = 'Background Message from html';
  const notificationOptions = {
   body: 'Background Message body.',
   icon: '/firebase-logo.png'
 };

  return self.registration.showNotification(notificationTitle,
     notificationOptions);
});