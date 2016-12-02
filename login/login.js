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
	//console.log("1");
		dao_checkUsernameAvailable(name, function(taken) {
		//console.log("2" + name);
		if (!taken) {
			//console.log("3");
			dao_setUserByUsername(name, user);
			alert("Welcome to Show Buddy, " + name + "!");
			window.location = "/settings/";
		}
		else {
			alert("Username is Taken");
		}
	});
}