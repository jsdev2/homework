function randomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomBoolean(){
    return (Math.random() > 0.5);
}

var streets = ["Matilda Drive", "Park Ave", "Main St", "Ocean Ave"];
var cities = ["Asbury Park", "New York City", "Chicago", "Palo Alto"];
var states = ["NY", "CA", "NJ", "PA", "FL", "IL"];

var buildingNumber = randomInt(1, 1000);
var streetName = randomItemFromArray(streets);
var city = randomItemFromArray(cities);
var state = randomItemFromArray(states);
var zip = randomInt(10000, 99999);

var maybeAptNumberWithComma;
if (randomBoolean()) {
    maybeAptNumberWithComma = "Apt " + randomInt(1, 100) + ", ";
} else {
    maybeAptNumberWithComma = "";
}

console.log(buildingNumber + " " + 
            streetName + ", " +
            maybeAptNumberWithComma +
            city + ", " +
            state + " " +
            zip);

