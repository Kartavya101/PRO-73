import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBrmFDH0eH_UlA6TgpnDYDuwhaSl3kYs_0",
  authDomain: "pro-73-c494c.firebaseapp.com",
  projectId: "pro-73-c494c",
  storageBucket: "pro-73-c494c.appspot.com",
  messagingSenderId: "637784646581",
  appId: "1:637784646581:web:ebfe55343e6e8faa43effc"
};
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
