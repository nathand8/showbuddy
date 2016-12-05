function setText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span>';
}

function loadConvoCard(cardDiv, c) {

    if (!cardDiv || !c) {
        console.error("Missing card div or match");
        return false;
    }

    setText(cardDiv, "person_name", c.screenname);

    setText(cardDiv, "person_phone", c.phone);
    setText(cardDiv, "person_email", c.email);

    cardDiv.find('[id="person_picture"]')[0].innerHTML = '<img class="person-picture" src="' + c.picture + '">';
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
