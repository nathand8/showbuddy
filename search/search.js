$(function(){
    loadCards();
});

var events = [
    {title: 'Unicorns', venue:'The Playground', datetime: new Date(), description: 'Going to the playground by yourself can be like drinking a gallon of yogurt by yourself. When you\'re half way done you usually wish you had brought friends', picture: '/images/eventPlaceholders/scooby.png', tags: ['Voldemort', 'Stalkers', 'Nazis']},
    {title: 'Unicorns', venue:'The Playground', datetime: new Date(), description: 'Going to the playground by yourself can be like drinking a gallon of yogurt by yourself. When you\'re half way done you usually wish you had brought friends. This is a really long description that should take up a bunch of room and go onto the next couple of lines. Lorem ipsum bacon crabs crawling across the desert savvannah. What the?! Is that how you spell Savannanah? I could have sworn it was three V\'s...', picture: '/images/eventPlaceholders/scooby.png', tags: ['Voldemort', 'Stalkers', 'Nazis']},
    {title: 'Unicorns', venue:'The Playground', datetime: new Date(), description: 'No picture! How does it look? Going to the playground by yourself can be like drinking a gallon of yogurt by yourself. When you\'re half way done you usually wish you had brought friends', tags: ['Voldemort', 'Stalkers', 'Nazis']},
    {title: 'Unicorns', venue:'The Playground', datetime: new Date(), description: 'Lots of Tags! How does it look? Going to the playground by yourself can be like drinking a gallon of yogurt by yourself. When you\'re half way done you usually wish you had brought friends', picture: '/images/eventPlaceholders/scooby.png', tags: ['Voldemort', 'Stalkers', 'Nazis', 'Playground', 'Family-Friendly', 'Would Make a Good Date This is a Long Tag']},
    {title: 'Unicorns', venue:'The Playground', datetime: new Date(), description: 'Going to the playground by yourself can be like drinking a gallon of yogurt by yourself. When you\'re half way done you usually wish you had brought friends', picture: '/images/eventPlaceholders/scooby.png', tags: ['Voldemort', 'Stalkers', 'Nazis']},
]

function loadCards() {
    $.each(events, function(i, ev) {
        var eventDiv = $(document.createElement('DIV'));
        $('div.event-card-list').append(eventDiv);
        eventDiv.load("/cards/event_card.html", function() {
            loadEventCard(eventDiv, ev)
        });
    })
}

