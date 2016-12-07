function setCurrentUser(username) {
	localStorage.username = username;
	console.log("stored as " + localStorage.username);
};

function getCurrentUser(cb) {
	console.log("trying to send back " + localStorage.username);
	cb(localStorage.username);
}

function getBuddiesVisited(cb) {
	cb(localStorage.buddiesVisited);
}

function setBuddiesVisited(visited) {
	localStorage.buddiesVisited = visited;
}
