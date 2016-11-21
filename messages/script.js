$(function(){
    loadCards();
});

var test_convos = [
    {
        convoId: "testUser_harambe",
        messages: [
            {
                message: "Let's carpool to the concert this weekend",
                sender: "testUser",
                timestamp: new Date(2016,10,21,11,30)
            },
            {
                message: "That's a good idea. I'll pick you up at 6",
                sender: "harambe",
                timestamp: new Date(2016,10,21,11,45)
            }
        ]
    },
    {
        convoId: "testUser_trump",
        messages: [
            {
                message: "You have to come to my concert. I have the best concerts. It's gonna be yuuge!",
                sender: "trump",
                timestamp: new Date(2016,10,20,11,30)
            },
            {
                message: "I'll be there :)",
                sender: "testUser",
                timestamp: new Date(2016,10,20,11,45)
            }
        ]
    }
];

function loadCards() {
    $.each(test_convos, function(i, c) {
        var convoDiv = $(document.createElement('DIV'));
        $('div.convo-cards').append(convoDiv);
        convoDiv.load("/messages/cards/convo_card.html", function() {
            loadConvoCard(convoDiv, c);
        });
    });
}
