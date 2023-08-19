// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const app = initializeApp ({
    apiKey: "AIzaSyAwJ6w6QmL_WUAvP59MIf4yx65gkQjpLd0",
    authDomain: "socialfilestorage-34552.firebaseapp.com",
    projectId: "socialfilestorage-34552",
    storageBucket: "socialfilestorage-34552.appspot.com",
    messagingSenderId: "403303705572",
    appId: "1:403303705572:web:76cfd72c73f9c0ab9bb5f1"
});

// Initialize Firebase
const storage = getStorage(app);
export default storage;
