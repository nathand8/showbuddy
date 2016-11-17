/* Connects to the firebase database */

function dao_setup() {
    var config = {
        apiKey: "AIzaSyASyl5TEdvqtSGC-TnKwNTf3JNudT9XxGQ",
        authDomain: "showbuddy-c9c5b.firebaseapp.com",
        databaseURL: "https://showbuddy-c9c5b.firebaseio.com",
        storageBucket: "showbuddy-c9c5b.appspot.com",
        messagingSenderId: "575551106527"
    };
    firebase.initializeApp(config);
    console.log("Congrats! You're connected to the database");
};

/*
 * Users
 */

function dao_getUserByUsername(uname, cb) {
    var db = firebase.database();
    var users = db.ref("users/");
    users.orderByChild('username').startAt(uname).limitToFirst(1).once('value', function(data) {
        var userobj = data.val()[Object.getOwnPropertyNames(data.val())[0]];
        cb(userobj);
    });
}

function dao_getTestUser(cb) {
    dao_getUserByUsername('TheTestUser', cb);
}

function dao_setUserByUsername(uname, uobject, cb) {
    // TODO: update object with username == uname as uobject
    // else if no object exists, create object
    // this is an UPSERT
}

/*
 * Events
 */
 
function dao_getEventById(eid, cb) {
    var db = firebase.database();
    var event = db.ref("events/").child(eid);
    event.once('value', function(data) {
        var eventobj = data.val();
        cb(eventobj);
    });
}

function dao_getTestEvent(cb) {
    dao_getEventById('TheTestEvent', cb);
}

function setEventByID(eid, eobject) {
    // TODO: UPSERT event by eid
}
