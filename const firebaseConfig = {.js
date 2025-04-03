const firebaseConfig = {
    apiKey: "AIzaSyCD2X4FMHeMaq_520-oakdO6Eu0YqSQfTw",
    authDomain: "health-a0a72.firebaseapp.com",
    projectId: "health-a0a72",
    storageBucket: "health-a0a72.firebasestorage.app",
    messagingSenderId: "912505496176",
    appId: "1:912505496176:web:1240998d7a253afd624ab5",
    measurementId: "G-WTX32LE7G3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();