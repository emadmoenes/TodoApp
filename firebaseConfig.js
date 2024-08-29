import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZW963l8-yB5adeuBoTaqjJPwSvFsiqqc",
  authDomain: "firbase-task-93d46.firebaseapp.com",
  projectId: "firbase-task-93d46",
  storageBucket: "firbase-task-93d46.appspot.com",
  messagingSenderId: "988463100212",
  appId: "1:988463100212:web:b91225525bb12ae1f4b561",
  measurementId: "G-KYDGE8Z2B8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
