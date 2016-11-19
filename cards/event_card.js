$(function() {

});

function setText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span';
}

function loadCard(cardDiv, ev) {

    if (!cardDiv || !ev) {
        console.error("Missing card div or event");
        return false;
    }

    setText(cardDiv, "event_title", ev.title);
    if (ev.datetime) {
        var dateString = (ev.datetime.getMonth() + 1) 
            + '/' + ev.datetime.getDate() 
            + '/' + (ev.datetime.getFullYear().toString().slice(-2));
        setText(cardDiv, "event_date", dateString);

        var hours = ev.datetime.getHours();
        var timeSuffix = "am";
        if (hours > 12) {
            hours = hours - 12;
            timeSuffix = "pm";
        }
        var minutes = ev.datetime.getMinutes().toString();
        if (minutes.length === 1) {
            minutes = '0' + minutes;
        }
        var timeString = (hours + ":" + minutes  + " " + timeSuffix);
        setText(cardDiv, "event_time", timeString);
    }
    setText(cardDiv, "event_venue", ev.venue);
    setText(cardDiv, "event_description", ev.description);

    if (ev.picture) {
        cardDiv.find('[id="event_picture"]')[0].innerHTML = '<img class="event-picture" src="' + ev.picture + '">';
    }

    if (ev.tags && ev.tags.length > 0) {
        $.each(ev.tags, function(i, tag) {
            $(cardDiv.find('[id="event_tags"]')[0]).append('<span class="event-tag">' + tag + '</span>');
        });
    }
}
