function setCurrentUser(username) {
	localStorage.username = username;
	console.log("stored as " + localStorage.username);
};

function getCurrentUser(cb) {
	console.log("trying to send back " + localStorage.username);
	cb(localStorage.username);
}