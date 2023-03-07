let userNameInput = document.querySelector(".username")

let passwordInput = document.querySelector(".password")

let modal = document.querySelector(".modal")

function dataValidation() {
	let userNameValue = userNameInput.value
	let passwordValue = passwordInput.value

	if (userNameValue.length < 12 || passwordValue.length < 8) {
		// alert('Error')
		modal.style.background = "rgb(223, 28, 28)";
		modal.innerHTML = "Please enter the required information correctly";
		modal.style.display = 'inline';
	}else {
		modal.style.background = "green";
		modal.innerHTML = "done successfully";
		modal.style.display = "inline";
	}

	setTimeout(function(){
		modal.style.display = 'none';
		},3000)
	
	console.log(userNameValue , passwordValue);
}