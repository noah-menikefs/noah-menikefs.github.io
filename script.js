// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCuB-2Z4UPLutFe68XD1tWT9VnIZ4_xx-4",
    authDomain: "test-b0203.firebaseapp.com",
    databaseURL: "https://test-b0203.firebaseio.com",
    projectId: "test-b0203",
    storageBucket: "test-b0203.appspot.com",
    messagingSenderId: "101942352507",
    appId: "1:101942352507:web:aade72c501a5c023c8a0de",
    measurementId: "G-Q27358MKXF"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

db.collection("users").add({
    first: "Noah",
    last: "Menikefs",
    born: 2002
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
