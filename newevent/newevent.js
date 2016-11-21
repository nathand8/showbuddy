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
		var title = document.getElementById("title").value;
		var artists =  $('#artistlist').find('li').map(function() {
			return $(this).text();
		}).toArray();
		var date = document.getElementById("date").value;
		var time = document.getElementById("time").value;
		var venue = document.getElementById("venue").value;
		var genres =  $('#genrelist').find('li').map(function() {
			return $(this).text();
		}).toArray();
		var description = document.getElementById("desc").value;
		
		var eObject = {
			title: title,
			artists: artists,
			date: date,
			time: time,
			tags: genres,
			description: description
		}
		
		//alert(eObject);
		return eObject;
};