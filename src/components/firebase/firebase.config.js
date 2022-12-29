// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9xhRbbXVvOgazkloRPfQslH0HucPEaUo",
    authDomain: "to-do-app-8fa51.firebaseapp.com",
    projectId: "to-do-app-8fa51",
    storageBucket: "to-do-app-8fa51.appspot.com",
    messagingSenderId: "42121231703",
    appId: "1:42121231703:web:6959edc0f821f5eb6fd212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;