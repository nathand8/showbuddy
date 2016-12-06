$(document).ready(function() {
	dao_setup();
});

function login() {
	var name = document.getElementById("uname").value;
	var password = document.getElementById("psw").value;
	dao_getUserWithLogin(name, password, function(uobj) {
		if (uobj == undefined) {
			alert("Wrong Username/Password combo");
		} 
		else {
			setCurrentUser(name);
			window.location = "/search/";
		}		
	});
}

function signup() {
	var name = document.getElementById("uname").value;
	var password = document.getElementById("psw").value;
	
	var user = {
		username: name,
		password: password
	}
		dao_checkUsernameAvailable(name, function(available) {
		if (available) {
			dao_setUserByUsername(name, user);
			alert("Welcome to Show Buddy, " + name + "!");
			setCurrentUser(name);
			window.location = "/settings/";
		}
		else {
			alert("Username is Taken");
		}
	});
}