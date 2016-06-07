// A brain teaser

// The classic 
// "closures + for loops + mutation + async functions = WTF" exercise

var fruits = [
  document.getElementById('dragonfruit'),
  document.getElementById('mango'),
  document.getElementById('apple')
];

for (var i = 0; i < fruits.length; i++) {
  fruits[i].addEventListener('click', function() {
    alert('I am the number ' + (i+1) + ' fruit!');
  });
}

// (FYI: 'addEventListener' is basically the DOM API version
// of jQuery's 'on' method, and it is what jQuery's 'on'
// method uses under the hood.)


// So what we want to have happen here is
// that when the user clicks dragonfruit, it alerts
// "I am the number 1 fruit", when they click mango,
// it alerts "I am the number 2 fruit", and when they
// click apple, it alerts "I am the number 3 fruit".

// 1. What happens instead?

// 2. Why?

// 3. Fix this problem, using the .forEach method
//    instead of a for loop.

// 4. Why does your fix work?

// BONUS: Look up "Immediately Invoked Function Expressions"
//        on the internet. One good link is the one in our
//        "further resources", https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/
//        Instead of using .forEach, keep the for loop and 
//        use an IIFE to fix the above problem.