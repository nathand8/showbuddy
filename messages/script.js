$(function(){
    loadCards();
});

var test_matches = [
    {
        name: "harambe",
        phone: "555-333-1234",
        email: "harambe@zoo.org"
    },
    {
        name: "trump",
        phone: "555-111-4444",
        email: "trump@usa.gov"
    }
];

function loadCards() {
    $.each(test_matches, function(i, c) {
        var convoDiv = $(document.createElement('DIV'));
        $('div.convo-cards').append(convoDiv);
        convoDiv.load("/messages/cards/convo_card.html", function() {
            loadConvoCard(convoDiv, c);
        });
    });
}
