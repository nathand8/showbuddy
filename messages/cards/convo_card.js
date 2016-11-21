function setText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span>';
}

function loadConvoCard(cardDiv, c) {

    if (!cardDiv || !c) {
        console.error("Missing card div or convo");
        return false;
    }

    var person_name = c.convoId.split('_')[1];

    setText(cardDiv, "person_name", person_name);

    var time = c.messages[c.messages.length - 1].timestamp;

    var dateString = (time.getMonth() + 1)
        + '/' + time.getDate()
        + '/' + (time.getFullYear().toString().slice(-2));

    var hours = time.getHours();
    var timeSuffix = "am";
    if (hours > 12) {
        hours = hours - 12;
        timeSuffix = "pm";
    }
    var minutes = time.getMinutes().toString();
    if (minutes.length === 1) {
        minutes = '0' + minutes;
    }
    var timeString = (hours + ":" + minutes  + " " + timeSuffix);
    setText(cardDiv, "convo_time", dateString + ', ' + timeString);

    setText(cardDiv, "convo_message", c.messages[c.messages.length - 1].message);

    cardDiv.find('[id="person_picture"]')[0].innerHTML = '<img class="person-picture" src="/images/peoplePlaceholders/' + person_name + '.jpg">';
}
