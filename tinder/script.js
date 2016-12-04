$(function(){
    dao_setup();
    init();
});

function init() {
    getCurrentUser(function(username) {
        dao_getUserByUsername(username, function(user) {
            $.each(user.people, function(index, otherName) {
                dao_getUserByUsername(otherName, function(otherUser) {
                    loadCards([otherUser]);
                })
            });
        })
    })
}

function loadCards(users) {
    $.each(users, function(i, p) {
        var personDiv = $(document.createElement('DIV'));
        $('div.people-cards').append(personDiv);
        personDiv.load("/cards/person_card.html", function() {
            loadPersonCard(personDiv, p, true);
        });
    });
}
