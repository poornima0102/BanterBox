import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBpU2zbLc7SC8mH_vHSLNhschQIS_ZrzgU",
  authDomain: "chat-4a8eb.firebaseapp.com",
  projectId: "chat-4a8eb",
  storageBucket: "chat-4a8eb.appspot.com",
  messagingSenderId: "321726153617",
  appId: "1:321726153617:web:ae45363cbdfa3ac6a5d030",
  measurementId: "G-5N00YZ93EW"
};
// Initialize Firebase

 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
export const storage = getStorage();
const db = getFirestore()


// const setUserTypingStatus = async (userId, isTyping) => {
//   const userRef = doc(db, "users", userId);
//   await setDoc(userRef, { isTyping });
// };

// // Function to listen for changes in user typing status
// const listenForTypingStatus = (userId, callback) => {
//   const userRef = doc(db, "users", userId);
//   onSnapshot(userRef, (snapshot) => {
//     const userData = snapshot.data();
//     if (userData) {
//       const { isTyping } = userData;
//       callback(isTyping);
//     }
//   });
// };

export { app, auth, db };


