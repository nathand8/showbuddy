$(function(){
    loadCards();
});

var test_event = {
    title: 'Scooby and the Doos',
    venue: "Your Mom's House",
    datetime: new Date(),
    description: 'Come catch these meddling kids on their reunion tour',
    picture: '/images/eventPlaceholders/scooby.png',
    tags: ['Prog Metal', 'Zoinks', 'Jinkies']
};

var test_people = [
    {
        name: 'Harambe',
        age: '17',
        description: 'My name is Harambe, and I like to party',
        picture: '/images/peoplePlaceholders/harambe.jpg'
    },

    {
        name: 'Trump',
        age: '70',
        description: 'My name is Trump, and I like to party',
        picture: '/images/peoplePlaceholders/trump.jpg'
    }
];

function loadCards() {
    var eventDiv = $(document.createElement('DIV'));
    $('div.event-card-header').append(eventDiv);
    eventDiv.load("/cards/event_card.html", function() {
        loadEventCard(eventDiv, test_event);
    });

    $.each(test_people, function(i, p) {
        var personDiv = $(document.createElement('DIV'));
        $('div.people-cards').append(personDiv);
        personDiv.load("/cards/person_card.html", function() {
            loadPersonCard(personDiv, p);
        });
    });
}
