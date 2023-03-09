let $ = document;

let usernameInput = $.querySelector(".username");

let passwordInput = $.querySelector(".password");

let usernameMessage = $.querySelector(".username-validation");

let passwordMessage = $.querySelector(".password-validation");

function usernameValidation(){
	// console.log("test");
	if (usernameInput.value.length < 12) {
		usernameMessage.innerHTML = "Must Contain 12 Character (Min)";
		usernameMessage.style.color = "red";
		usernameMessage.style.display = "block";
	}else {
		usernameMessage.innerHTML = "Correct username Value";
		usernameMessage.style.color = "green";
		usernameMessage.style.display = "block";

	}
}

function passwordValidation(){
	if (passwordInput.value.length < 8) {
		passwordMessage.innerHTML = "Must Contain 8 Character (Min)";
		passwordMessage.style.color = "red";
		passwordMessage.style.display = "block";
	}else {
		passwordMessage.innerHTML = "Correct password Value";
		passwordMessage.style.color = "green";
		passwordMessage.style.display = "block";
	}
}