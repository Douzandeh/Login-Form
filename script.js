let userNameMessage = document.querySelector(".username-validation")
let passwordMessage = document.querySelector(".password-validation")

let usernameInput = document.querySelector('.username')

let passwordInput = document.querySelector('.password')

function usernameValidation (){
	// alert('username')
	if (usernameInput.value.length < 12) {
		userNameMessage.style.color = 'red';
		userNameMessage.innerHTML = "Most Contain 12 Character (Min)";
		userNameMessage.style.display = "block";
	}else {
		userNameMessage.style.color = 'green';
		userNameMessage.innerHTML = "Correct Username Value";
		userNameMessage.style.display = "block";
	}
}

function passwordValidation (){
	// alert('password')
	if (passwordInput.value.length < 8) {
		passwordMessage.style.color = 'red';
		passwordMessage.innerHTML = "Most Contain 8 Character (Min)";
		passwordMessage.style.display = "block";
	}else {
		passwordMessage.style.color = 'green';
		passwordMessage.innerHTML = "Correct password Value";
	}
	
}