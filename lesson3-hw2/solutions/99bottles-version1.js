// Solution 1:

for (beers = 99; beers >= 0; beers--) {
    if (beers > 2) {
        console.log(beers + " bottles of beer on the wall, " + 
                    beers + " bottles of beer.\n" +
                    "Take one down and pass it around, " + 
                    (beers - 1) + " bottles of beer on the wall.");
    } 
    else if (beers === 2) {
        console.log("2 bottles of beer on the wall, " + 
                    "2 bottles of beer.\n" +
                    "Take one down and pass it around, " + 
                    "1 bottle of beer on the wall.");
    } 
    else if (beers === 1) {
        console.log("1 bottle of beer on the wall, " + 
                    "1 bottle of beer.\n" +
                    "Take one down and pass it around, " + 
                    "no more bottles of beer on the wall.");
    } 
    else {
        console.log("No more bottles of beer on the wall, " + 
                    "no more bottles of beer.\n" +
                    "Go to the store and buy some more, " + 
                    "99 bottles of beer on the wall.");
    }
}
