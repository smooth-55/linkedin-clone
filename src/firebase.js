import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB9ZQwK2K3N89K7tMo942ywAZdFvIvaK1I",
	authDomain: "linkedin-clone-72638.firebaseapp.com",
	projectId: "linkedin-clone-72638",
	storageBucket: "linkedin-clone-72638.appspot.com",
	messagingSenderId: "535985039541",
	appId: "1:535985039541:web:e73b28b390d1c2221536fc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
