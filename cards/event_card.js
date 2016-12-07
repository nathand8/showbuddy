$(function() {

});

function setText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span>';
}

function loadEventCard(cardDiv, ev, showButtons) {

    if (!cardDiv || !ev) {
        console.error("Missing card div or event");
        return false;
    }

    setText(cardDiv, "event_title", ev.title);

    setText(cardDiv, "event_date", ev.date);
    setText(cardDiv, "event_time", ev.time);

    setText(cardDiv, "event_venue", ev.venue);
    setText(cardDiv, "event_description", ev.description);

    if (ev.picture) {
        cardDiv.find('[id="event_picture"]')[0].innerHTML = '<img class="event-picture" src="' + ev.picture + '">';
    }

    if (ev.tags && ev.tags.length > 0) {
        $.each(ev.tags, function(i, tag) {
            $(cardDiv.find('[id="event_tags"]')[0]).append('<div class="event-tag">' + tag + '</div>');
        });
    }

    if (showButtons) {
        cardDiv.find('.event-card-action.hidden').each(function(i, button) {
            $(button).removeClass('hidden');
        });
    }
}

function rejectEvent(actionElem) {
    $(actionElem).parent().addClass("rejected");
    setTimeout(function() {
        $(actionElem).parent().remove();
    }, 500);
}

function acceptEvent(actionElem) {
    $(actionElem).parent().addClass("accepted");
    setTimeout(function() {
        $(actionElem).parent().remove();
    }, 500);
}

function hideCard(cardElem) {
}
