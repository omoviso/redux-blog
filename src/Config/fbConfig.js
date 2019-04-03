import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCE1a2Zr4e55zvPXERz5l_prltbGsT6GP8",
  authDomain: "my-blog-78a33.firebaseapp.com",
  databaseURL: "https://my-blog-78a33.firebaseio.com",
  projectId: "my-blog-78a33",
  storageBucket: "my-blog-78a33.appspot.com",
  messagingSenderId: "463560316487"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
