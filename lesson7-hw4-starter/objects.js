/////// Object homework //////

// For examples refer back to the monkey exercise (and other files) at 
// https://github.com/jsdev2/jsdev2-in-class-exercises/blob/master/lesson06/lesson6-in-class-exercises.zip?raw=true

// You are the owner of a veterinary clinic. You have a bunch of 
// animals under your care. For instance, Binky, who is a bull.

// 1. Please make an object literal for Binky (an object literal is
// an object made using curly braces, not using a constructor function),
// and give Binky the attributes of `name`, `species`, 
// `isCured` (a boolean), and `noise` (probably "Moo!" for Binky,
// although the Internet is divided on the question of whether 
// bulls go "Moo!", like cows). 

// In addition, give the Binky object a method, `makeNoise`, that 
// console.logs Binky's `noise` property.

// Answer here:

var binky = {

};

// 2. Please make a constructor function to create other animals
// like Binky, that all have a `name`, a `species` (doesn't have to 
// always be a bull -- you take in all kinds of animals), an `isCured`
// property, and a `noise`. And give them access to a `makeNoise` method, 
// which will be declared on the constructor function 
// using the `Animal.prototype.makeNoise = ` syntax.

// Answer here:

function Animal(name, species, isCured, noise) {

}

// (don't forget the makeNoise method!)

// 3. Say you want to print out a report of all the animals that are
// cured and ready to go home.

// Create several animals using your constructor function from Question 2.
// Put all your animals into an array. You can include Binky as well --
// he should respond in all the same ways as the other animals. Just
// because he was created by an object literal and not by a constructor
// function, doesn't make him any less worthy of our love.

// Now iterate through the array using the technique of your choice
// (`for` loop, `forEach` function, etc.) and console.log something
// about each animal that is still sick and each animal that is 
// ready to go home because they are cured. Also, if they are cured,
// have them make their noise, out of sheer joy.

// So your output would be something like:

// Sally is ready to go home.
// Meow!
// Sean is still sick.
// Barry is still sick.
// Sylvia is still sick.
// Binky is ready to go home.
// Moo!

// Answer here:

