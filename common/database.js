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
        var dv = data.val(); 
        if (dv == undefined) {
            cb(undefined);
        }
        else {
            var userobj = dv[Object.getOwnPropertyNames(dv)[0]];
            if (userobj == undefined) {
                cb(undefined);
            } else {
                cb(userobj);
            }
        }
    });
}

function dao_getTestUser(cb) {
    dao_getUserByUsername('TheTestUser', cb);
}

function dao_setUserByUsername(uname, uobject, cb) {
    var db = firebase.database();
    var users = db.ref("users/");
    users.push(uobject);
}

// returns boolean : username is available
function dao_checkUsernameAvailable(uname, cb) {
    dao_getUserByUsername(uname, function(uobj) {
        cb(uobj == undefined);
    });
}

// returns undefined for a failed login
function dao_getUserWithLogin(uname, upass, cb) {
    dao_getUserByUsername(uname, function(uobj) {
        if (uobj==undefined) {
            cb(undefined);
        } else if (uobj.password == upass) {
            cb(uobj);
        } else {
            cb(undefined);
        }
    });
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
