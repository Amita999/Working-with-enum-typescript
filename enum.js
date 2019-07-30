var userLocation;
(function (userLocation) {
    userLocation[userLocation["india"] = 0] = "india";
    userLocation[userLocation["usa"] = 1] = "usa";
    userLocation[userLocation["Nz"] = 2] = "Nz";
})(userLocation || (userLocation = {}));
;
function UserDetails() {
    var details = [
        {
            id: 1,
            name: 'Priyanka',
            location: userLocation.usa,
            avl: false
        },
        {
            id: 2,
            name: 'Neha',
            location: userLocation.india,
            avl: false
        },
        {
            id: 3,
            name: 'Raina',
            location: userLocation.Nz,
            avl: true
        }
    ];
    return details;
}
;
var storeDetails = UserDetails();
function getLocation(Area) {
    console.log("Country : " + Area);
    console.log("Country : " + userLocation[Area]);
    var userData = [];
    for (var _i = 0, storeDetails_1 = storeDetails; _i < storeDetails_1.length; _i++) {
        var s = storeDetails_1[_i];
        if (s.avl) {
            userData.push(s.id + " " + s.name);
            break;
        }
        ;
    }
    ;
    console.log(userData);
    return userData;
}
;
getLocation(userLocation.usa);
