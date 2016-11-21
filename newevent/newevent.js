$(document).ready(function() {
	$("#date").datepicker();
	$('input.timepicker').timepicker({
		timeFormat: 'h:mm p',
		interval: 30,
		minTime: '0',
		maxTime: '11:30pm',
		defaultTime: '18',
		startTime: '0:00',
		dynamic: false,
		dropdown: true,
		scrollbar: true
	})
	$('#submitbutton').click(function() {
		submitForm();
	})
	dao_setup();
});

function addArtist(){
        var li = document.createElement("li");  
        var input = document.getElementById("artists");
        li.innerHTML = input.value;
        input.value = "";

        document.getElementById("artistlist").appendChild(li);
};
	
function addGenre(){
        var li = document.createElement("li");  
        var input = document.getElementById("genres");
        li.innerHTML = input.value;
        input.value = "";

        document.getElementById("genrelist").appendChild(li);
};

function submit() {
	var eventobj = submitForm();
	var title = $('#title').value;
	dao_setEventByID(title, eventobj);
};
	
function submitForm() {
		var eventObj = {};
		var title = document.getElementById("title").value;
		eventObj["title"] = title;
		var artistlist = document.getElementById("artistlist");
		var artists = {};
		for (var i = 0; i < artistlist.length; i++) {
			artists[i] = artistlist.childNodes[0].childNodes[i].nodeValue;
		};
		eventObj["artists"] = JSON.stringify(artists);
		eventObj["date"] = document.getElementById("date").value;
		eventObj["time"] = document.getElementById("time").value;
		eventObj["venue"] = document.getElementById("venue").value;
		var genrelist = document.getElementById("genrelist");
		var genres = {};
		for (var i = 0; i < genrelist.length; i++) {
			genres[i] = genrelist.childNodes[0].childNodes[i].nodeValue;
		};
		eventObj["genres"] = JSON.stringify(genres);
		eventObj["description"] = document.getElementById("desc").value;
		
		return JSON.stringify(eventObj);
};