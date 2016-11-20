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
	});
});

function addArtist(){
        var li = document.createElement("li");  
        var input = document.getElementById("artists");
        li.innerHTML = input.value;
        input.value = "";

        document.getElementById("artistlist").appendChild(li);
    }
	
	function addGenre(){
        var li = document.createElement("li");  
        var input = document.getElementById("genres");
        li.innerHTML = input.value;
        input.value = "";

        document.getElementById("genrelist").appendChild(li);
    }
	
	function submitForm() {
		var 
	}