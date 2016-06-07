// - Predicate exercise

// - Your goal in this exercise is for the last line of code in this file 
//   to return the number of odd numbers in the array that's being passed in. 
//   Below are the steps that you will likely want to take in order to get there.


// - Write a function, "makeCountingFunction", that returns another function. 
//   The function returned by makeCountingFunction should take an array as an 
//   argument, and return the number of odd integers in the array.

// - makeCountingFunction itself should take as its only argument something 
//   called a "predicate function", a function designed to run a test on each 
//   item in an array. Predicate functions return true or false, depending 
//   on whether the test passed.

// - So the function that gets returned from makeCountingFunction()
//   should iterate through the array that gets passed to it, apply 
//   the predicate function to each item in the array, and increment 
//   a counter based on the results. Lastly, it should return the final count.

// - Also write the function "isOdd", which should accept an individual number as a 
//   parameter and return true if the number is odd, and false if it's not. 


function makeCountingFunction (predicate) {

}

function isOdd(number) {

}

// Once you've filled in the two function definitions above, the line below 
// should package up 'makeCountingFunction()' and 'isOdd()' into a single 
// function that accepts an array of items as a parameter, iterates through 
// it and returns a count of how many of those items are odd numbers. This 
// new function is being assigned to the variable 'countTheOdds'.

var countTheOdds = makeCountingFunction(isOdd);

// The final line below calls our new 'countTheOdds()' function 
// and passes in an array of numbers. (It should console.log the number 4).

console.log(countTheOdds([1, 2, 3, 4, 5, 6, 7]));


// BONUS: Use makeCountingFunction, along with other predicates that you write
//        ("isEven" and "isLessThanFive" are good choices), to create functions 
//        like "countTheOdds" that count all the occurrences of other kinds of 
//        numbers, not just odd ones.

