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

function dao_addMessageThreadToUser(user, messageId) {
    console.log(firebase.database().ref("users/").child(user).toString());
    firebase.database().ref("users/").child(user).transaction(function(currData) {
        console.log(currData);
        if (currData != undefined) {
            console.log(currData);
            if (currData.messages.indexOf(messageId) > -1) {
                currData.messages.push(messageId);
            }
            return currData;
        }
    }, function (e, c, s) {
        console.log(e);
        console.log(c);
        console.log(s.val());
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

function dao_setEventByID(eid, eobject) {
    var db = firebase.database();
    var events = db.ref("events/");
    events.push(eobject);
}

/*
 * Messages
 */
 
function dao_getMessagesByParticipants(usera, userb, cb) {
    var db = firebase.database();
    var messages = db.ref("messages/");
    var mId = "";
    if (usera.localeCompare(userb) > 0) {
        mId = userb + "_" + usera;
    } else if (usera.localeCompare(userb) < 0) {
        mId = usera + "_" + userb;
    }
    messages.orderByChild('messageId').equalTo(mId).once('value', function(data) {
        var dv = data.val(); 
        if (dv == undefined) {
            cb(undefined);
        }
        else {
            var messobj = dv[Object.getOwnPropertyNames(dv)[0]];
            if (messobj == undefined) {
                cb(undefined);
            } else {
                cb(messobj);
            }
        }
    });    
}

function dao_sendMessageFromUserToUser(sender, receiver, message) {
    if (sender == receiver) {
        return;
    } else {
        var m = {};
        var mId = "";
        if (sender.localeCompare(receiver) > 0) {
            mId = receiver + "_" + sender;
        } else {
            mId = sender + "_" + receiver;
        }
        console.log(firebase.database().ref("messages/").orderByChild('messageId').equalTo(mId).ref.toString());
        firebase.database().ref("messages/").orderByChild('messageId').equalTo(mId).once('value', function(data) {
            var mkey = "m_" + mId;
            if (data.val() != undefined) {
                mkey = Object.getOwnPropertyNames(data.val())[0];
            }
            firebase.database().ref("messages/").child(mkey).transaction(function(currData) {
                dao_addMessageThreadToUser(sender, mId);
                dao_addMessageThreadToUser(receiver, mId);
                if (currData === null) {
                    return {
                        'messageId' : mId,
                        'messages' : [
                            {
                                'sender' : sender,
                                'message' : message
                            }
                        ]
                    };
                } else {
                    console.log(currData);
                    currData.messages.push({'sender':sender, 'message':message});
                    return currData;
                }
            });
        });
    }
}
