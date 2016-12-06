function setText(containerDiv, selectorId, text) {
    if (containerDiv && selectorId && text)
        containerDiv.find('[id="' + selectorId + '"]')[0].innerHTML = '<span>' + text + '</span>';
}

function loadPersonCard(cardDiv, p, showButtons) {
    if (!cardDiv || !p) {
        console.error("Missing card div or person");
        return false;
    }

    setText(cardDiv, "person_name", p.screenname + ', ');
    setText(cardDiv, "person_age", p.age);
    setText(cardDiv, "person_description", p.description);

    if (p.picture) {
        cardDiv.find('[id="person_picture"]')[0].innerHTML = '<img class="person_picture" src="' + p.picture + '">';
    }

    if (showButtons) {
        cardDiv.find('.person-card-action.hidden').each(function(i, button) {
            $(button).removeClass('hidden');
        });
    }
}

function rejectPerson(actionElem) {
    $(actionElem).parent().addClass("rejected");
    setTimeout(function() {
        $(actionElem).parent().remove();
    }, 500);
}

function acceptPerson(actionElem) {
    $(actionElem).parent().addClass("accepted");
    setTimeout(function() {
        $(actionElem).parent().remove();
    }, 500);
}
