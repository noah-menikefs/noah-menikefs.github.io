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
			outputHeader.innerText = "Status: " + myData.hotDogStatus;
		}
	}).catch(function (error){
		console.log("Got an error: ", error);
	});
});

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

});

getRealtimeUpdates = function(){
	docRef.onSnapshot(function (doc){
		if (doc && doc.exists){
			const myData = doc.data();
			console.log("Check out this document I received", doc);
			outputHeader.innerText = "Status: " + myData.hotDogStatus;
		}
	});
}

getRealtimeUpdates();