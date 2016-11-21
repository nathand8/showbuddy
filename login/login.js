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
	
	dao_checkUsernameAvailable(name, function(nottaken) {
		if (nottaken) {
			dao_setUserByUsername(name, user, null);
		}
		else {
			alert("Username is Taken");
		}
	});
}