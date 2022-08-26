// // import firebase from "firebase/app";
// import * as firebase from "firebase/app";
// // import "firebase/firestore";
// import "firebase/compat/firestore";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7bqGpLQ9vNqOrgh2jFaLJKlbq9wiHMPg",
//   authDomain: "clone-shopee-90412.firebaseapp.com",
//   projectId: "clone-shopee-90412",
//   storageBucket: "clone-shopee-90412.appspot.com",
//   messagingSenderId: "210055910758",
//   appId: "1:210055910758:web:91aab4d2d9c5ac13d164a7",
//   measurementId: "G-TSTYB4E982",
// };
// // firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// const firebaseStoreCore = firebase.firestore();
// // // const firebaseStoreCore = firebase.fi

// // export { firebaseStoreCore };
// export default firebaseStoreCore;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// import { collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7bqGpLQ9vNqOrgh2jFaLJKlbq9wiHMPg",
  authDomain: "clone-shopee-90412.firebaseapp.com",
  projectId: "clone-shopee-90412",
  storageBucket: "clone-shopee-90412.appspot.com",
  messagingSenderId: "210055910758",
  appId: "1:210055910758:web:91aab4d2d9c5ac13d164a7",
  measurementId: "G-TSTYB4E982",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const getAllData = collection("transections").get();
const db = getFirestore();

// const colRef = getDocs(collection(db, "transections"));
// const colRef = collection(db, "transections");
export { analytics, db };
