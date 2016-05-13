// Solution 2:

function bottlePhrase(n) {
    if (n > 1) {
        return n + " bottles";
    } else if (n === 1) {
        return "1 bottle";
    } else {
        return "no more bottles";
    }
}

for (beers = 99; beers >= 1; beers--) {
    console.log(bottlePhrase(beers) + " of beer on the wall, " + 
                bottlePhrase(beers) + " of beer.\n" +
                "Take one down and pass it around, " + 
                bottlePhrase(beers - 1) + " of beer on the wall.");
}

console.log("No more bottles of beer on the wall, " + 
            "no more bottles of beer.\n" +
            "Go to the store and buy some more, " + 
            "99 bottles of beer on the wall.");
