// PART 1:

/*
Your project manager has come to you and said "{INSERT NAME HERE}! The president
just called and he wants us to make a web page that prints the lyrics of
99 bottles of beer in a UL list in HTML."

You respond, hesitantly, "Y.. you want me to take on this dire task?"

Your project manager, a tear in their eye, nods.

//////////////////

Make an HTML page (that you need to create), that has a <ul> tag that you then put a bunch
of li tags into, containing the 99 bottles of beer lyrics.

You know could type them out by hand, but you know a better way, thanks to JavaScript
and some recently learned DOM methods...

(Show the html file you start out with, and the js code you use to add the lyrics.
When the browser opens the html file, it should populate with the lyrics.)

*/



// PART 2:



/*

You've delivered your 99 bottles of beer project. The world is safer now.
As you polish off the last drop of champagne at your commendation party, your
project manager Mike Glumac busts through the doors, totally interrupting the
party and says to you, "PERSON! It's the prime minister of Scotland. They require you."

Mike informs you that the beer lyrics webpage has offended the good people of Scotland.

He says that you must be able to click a button on the page that appendChilds the
lyrics to the Scottish national anthem. He gives you a piece of paper with a link
to the lyrics on it: http://www.metrolyrics.com/scotland-the-brave-lyrics-traditional.html

He shakes your hand while leaning in closely and whispers, "The world needs you".

Your spring into action to make a webpage that has a simple button on it that
when clicked, adds <li> elements to the <ul> containing the lyrics to the (unofficial)
scottish national anthem.

(Show the js code you use to add the button that adds the lyrics to the scottish 
national anthem.)

*/

function addToList(ul, newText) {
  var newLi = document.createElement('li');
  var newTextNode = document.createTextNode(newText);
  newLi.appendChild(newTextNode);
  ul.appendChild(newLi);
}

function bottlePhrase(n) {
    if (n > 1) {
        return n + " bottles";
    } else if (n === 1) {
        return "1 bottle";
    } else {
        return "no more bottles";
    }
}



function print99bottlesOfBeer(listElement) {
  for (beers = 99; beers >= 1; beers--) {
    var verse = bottlePhrase(beers) + " of beer on the wall, " + 
                bottlePhrase(beers) + " of beer. " +
                "Take one down and pass it around, " + 
                bottlePhrase(beers - 1) + " of beer on the wall.";
    addToList(listElement, verse);
  }

  var finalVerse = "No more bottles of beer on the wall, " + 
                   "no more bottles of beer.\n" +
                   "Go to the store and buy some more, " + 
                   "99 bottles of beer on the wall.";

  addToList(listElement, finalVerse);
}


function printScottishNationalAnthem(listElement) {
  var verses = [
    "Hark, when the night is falling",
    "Hear, hear the pipes are calling",
    "Loudly and proudly calling down through the glen",
    "There where the hills are sleeping",
    "now feel the blood a leaping",
    "high as the spirits of the old highland men",

    "(Chorus)",
    "Towering in gallant fame",
    "Scotland my mountain hame",
    "High may your proud standards gloriously wave",

    "Land o' the high endeavour",
    "Land o' the shining river",
    "land o' my heart forever",
    "Scotland the brave",

    "High in the Misty highlands,",
    "out by the purple islands",
    "brave are the hearts that beat beneath Scottish skies",
    "wild are the winds to meet you",
    "staunch are the friends that greet you",
    "kind as the love that shines from fair maidens eyes."
  ];

  verses.forEach(function(verse) {
    addToList(listElement, verse);
  });
}

function makeButtonToAddAnthem(listElement) {
  var button = document.createElement('button');
  var buttonTextNode = document.createTextNode('Show some Scottish pride!');
  button.appendChild(buttonTextNode);
  listElement.appendChild(button);
  button.onclick = function() {
    printScottishNationalAnthem(listElement);
  }
}



// The main code:

var beerList = document.getElementById('beer-list');

print99bottlesOfBeer(beerList);
makeButtonToAddAnthem(beerList);







