$(function(){
    dao_setup();
    init();
});


function init() {
    // Todo: Change this from "TheTestUser" to the user that's currently logged in
	getCurrentUser(function(username) {
		console.log("Current User: " + username);
	})
    dao_getUserByUsername('TheTestUser', function(user) {
        // For each of user.events, look up the event and add it
        $.each(user.events, function(index, eventId) {
            dao_getEventById(eventId, function(event) {
                loadCards([event]);
            })
        });
    })
}

function loadCards(events) {
    $.each(events, function(i, ev) {
        var eventDiv = $(document.createElement('DIV'));
        $('div.event-card-list').append(eventDiv);
        eventDiv.load("/cards/event_card.html", function() {
            loadEventCard(eventDiv, ev, true)
        });
    })
}

