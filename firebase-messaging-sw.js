importScripts("https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js");

firebase.initializeApp({
    // apiKey: 'AIzaSyBuK7CakNGYcxU1SCgbxu63nwQc81A6g3g',
    // appId: '1:637617021437:web:e38e7a13a011dcbd017994',
    // messagingSenderId: '637617021437',
    // projectId: 'maff-app-9573b',
    // authDomain: 'maff-app-9573b.firebaseapp.com',
    // storageBucket: 'maff-app-9573b.appspot.com',
    // measurementId: "G-3RW6N2RPY1",
    apiKey: "AIzaSyCMZO2SOVq0VIRnsULRea5rdCpwztVO-cw",
    authDomain: "push-398a5.firebaseapp.com",
    projectId: "push-398a5",
    storageBucket: "push-398a5.firebasestorage.app",
    messagingSenderId: "971528998114",
    appId: "1:971528998114:web:f889d841e83fab1b1022bb",
    measurementId: "G-LQB3T4XHMY"
});

const app = initializeApp(firebaseConfig);
const messaging = app.messaging() //getMessaging(app);

// Handle background messages
messaging.onBackgroundMessage(async (payload) => {
    console.log('Received background message:', payload);

    self.registration.showNotification(
        payload.notification.title,
        {
            body: payload.notification.body,
            icon: "/icons/Icon-192.png",
        }
    );
});