// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2xt6hQIxJxXrg4Ir-5XwFKZrjfVijgec",
  authDomain: "gonulgulsenkurt-95656.firebaseapp.com",
  projectId: "gonulgulsenkurt-95656",
  storageBucket: "gonulgulsenkurt-95656.appspot.com",
  messagingSenderId: "660452411635	",
  appId: "1:660452411635:ios:16d76a22d7524bd2a6cf86",
};





const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});