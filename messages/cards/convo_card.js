function setText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span>';
}

function loadConvoCard(cardDiv, c) {

    if (!cardDiv || !c) {
        console.error("Missing card div or convo");
        return false;
    }

    cardDiv.find('[id="convo_card"]')[0].id = c.convoId;

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

function loadMsgCards(cId) {
    $('#msg-cards').empty();

    var c;
    for(var i = 0; i < test_convos.length; i++){
        if(test_convos[i].convoId == cId){
            c = test_convos[i];
            break;
        }
    }

    var name = c.convoId.split('_')[1];
    setText($('#myModal'), 'modal-title', name);
    $('#message-image')[0].src = '/images/peoplePlaceholders/' + name + '.jpg';
    $.each(c.messages, function(i, m) {
        var msgDiv = $(document.createElement('DIV'));
        $('#msg-cards').append(msgDiv);
        msgDiv.load("/messages/cards/message_card.html", function() {
            loadMsgCard(msgDiv, m);
        });
    });
}
