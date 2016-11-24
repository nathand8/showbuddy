function setMsgText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span>';
}

function loadMsgCard(cardDiv, m) {
    setMsgText(cardDiv, 'msg-body', m.message);

    var time = m.timestamp;

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

    setMsgText(cardDiv, 'msg-time', dateString + ', ' + timeString);

    var myName = 'testUser';

    cardDiv.find('[id="msg-card"]').addClass(m.sender == myName ? 'sent' : 'received');
}
