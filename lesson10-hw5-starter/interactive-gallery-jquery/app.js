// Let's make an interactive gallery 
// to showcase some of Mark Rothko's Color Field paintings.

$(document).ready(function(){

  // 1. YELLOW: 
  //    Add a 5px solid yellow border to the yellow painting when 
  //    the user clicks on it.
  //
  //    BONUS: Toggle back and forth between border and no border, every
  //           time the user clicks. Hint: Look up .toggleClass() in the 
  //           jQuery docs.

  // 2. GREY: 
  //    When the mouse enters the grey painting, clone the grey painting
  //    and append that to the gallery. Hint: to clone an element (or elements) 
  //    using jQuery, use the .clone() method: `$('.my-thing').clone()` or
  //    `$(myDOMElement).clone()` or `$(this).clone()`. The return value of all
  //    these things is a new jQuery object containing a new element (or elements) 
  //    that are just like the original element (or elements). Same tag names,
  //    same attributes, same css classes, etc.
  //
  //    BONUS: Have this same action (the cloning when you mouse over it) work on the 
  //           new grey paintings that get appended to the gallery. Try to do this 
  //           without having to add any new event listeners when new grey paintings 
  //           are appended.

  // 3. PINK: 
  //    When there is a change in the value of the text input box, change the html 
  //    of the pink-span to match the text in the input box. Hint: use a click 
  //    listener on the submit button, and then the magic features of the 
  //    <form> element will take care of when the user presses the enter key. 
  //    Make sure to use `event.preventDefault()`
  //
  //    BONUS: Have the new text show up in the pink painting as you type it,
  //           not just when somebody presses submit or presses the enter key.
  //           Hint: look up the keyboard events in the jQuery documentation
  //           (keypress, keydown, keyup).

  // 4. BLUE: 
  //    When the user clicks on the blue painting, make it fade out and disappear. Or
  //    make it slide up. Or slide down. Or do anything else you want, really.


  // 5. BONUS: 
  //    When a gallery viewer presses the space bar, have all the pictures toggle back 
  //    and forth between the size they are now, and much smaller (width 75px, height 
  //    100px). Hint: look up keyboard events in the jQuery documentation, and check out 
  //    their description of `event.which`. What element do you need to set the listener
  //    on, to catch keyboard input when the user is not typing in any input boxes?

  // 5. DOUBLE BONUS: 
  //    To make your own Color Field page, have the page's background color equal the 
  //    value of the input box.
});

