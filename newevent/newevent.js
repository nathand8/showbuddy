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

