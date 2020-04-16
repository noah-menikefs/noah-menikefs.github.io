
// Initialize Firebase
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

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const docRef = firestore.doc("samples/sandwichData");
const outputHeader = document.querySelector("#myName");
const inputTextField = document.querySelector("#status");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

saveButton.addEventListener("click", function(){
	const textToSave = inputTextField.value;
	console.log("I am going to save " + textToSave + " to Firestore");
	docRef.set({
		hotDogStatus: textToSave
	}).then(function(){
		console.log("Status saved!");
	}).catch(function (error){
		console.log("Got an error: ", error);
	});
});

loadButton.addEventListener("click", function(){
	docRef.get().then(function (doc){
		if (doc && doc.exists){
			const myData = doc.data();
			outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
		}
	}).catch(function (error){
		console.log("Got an error: ", error);
	});
});

getRealtimeUpdates = function(){
	docRef.onSnapshot(function (doc){
		if (doc && doc.exists){
			const myData = doc.data();
			console.log("Check out this document I received", doc);
			outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
		}
	});
}

getRealtimeUpdates();