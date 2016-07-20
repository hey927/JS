var friends = {};
friends.bill = {firstName: "Bill", lastName: "Kala", number: "210-678", address: ['One Microsoft Way','Redmond','WA','98052']};
friends.steve = {firstName: "Steve", lastName: "Happy", number: "201-542", address: ['One Microsoft Way','Redmond','WA','98052']};

var list = function (friends) {
    for (var key in friends) {
        console.log(key);
    }
};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list(friends);
search("Steve");
