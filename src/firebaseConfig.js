import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA24AWO7RSDkplmElecy_PssILaR8lzjf8",
    authDomain: "recipe-sharing-rating-platform.firebaseapp.com",
    projectId: "recipe-sharing-rating-platform",
    storageBucket: "recipe-sharing-rating-platform.firebasestorage.app",
    messagingSenderId: "543318487088",
    appId: "1:543318487088:web:60e50b490a19099391bdf5",
    measurementId: "G-X9TK7ZT77W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };