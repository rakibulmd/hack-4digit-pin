document.getElementById("pin-submit").addEventListener("click", function () {
	if (parseFloat(document.getElementById("input-pin").value) < 999) {
		alert("please enter 4 digit and first lette can no be 0");
	} else {
		document.getElementById("user-pin").innerText =
			document.getElementById("input-pin").value;
	}
});

function hackPass(target) {
	let key = Math.floor(1000 + Math.random() * 9000);
	if (key == target) {
		let targetFound = document.createElement("p");
		targetFound.innerText = "The Pin is: " + key;
		document.getElementById("target-parent").appendChild(targetFound);
		document.getElementById("target-parent").appendChild(targetValue);
		console.log("found", key);
		return;
	} else {
		let currentkey = document.createElement("p");
		currentkey.innerText = key + ",";
		document.getElementById("log-view").appendChild(currentkey);
		console.log(key);
		hackPass(target);
	}
	// else {
	// 	document.getElementById("current-log").innerHTML =
	// 		"Currenty key is:" + key;
	// 	hackPass(target);
	// }
}

document.getElementById("hack-btn").addEventListener("click", function () {
	let target = document.getElementById("user-pin").innerText;

	hackPass(target);

	let targetValue = document.createElement("p");
	targetValue.innerText = "The PIN is " + target;
});
