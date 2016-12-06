$(function(){
    dao_setup();
    init();
});

function init() {
    getCurrentUser(function(username) {
        dao_getUserByUsername(username, function(user) {
            $.each(user.matches, function(index, otherName) {
                dao_getUserByUsername(otherName, function(otherUser) {
                    loadCards([otherUser]);
                })
            });
        })
    })
}

function loadCards(matches) {
    $.each(matches, function(i, c) {
        var convoDiv = $(document.createElement('DIV'));
        $('div.convo-cards').append(convoDiv);
        convoDiv.load("/messages/cards/convo_card.html", function() {
            loadConvoCard(convoDiv, c);
        });
    });
}
