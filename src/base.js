import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_TO,
	appId: import.meta.env.VITE_APP_ID
};


// INIT FIREBASE CONNECTION
const app = initializeApp(firebaseConfig);

//INIT FIREBASE AUTH APP CONNECTION
const auth = getAuth(app);

//EXPORT AUTH
export {auth};
