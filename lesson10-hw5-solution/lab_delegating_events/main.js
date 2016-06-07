/*

Homework: Event delegation

Refactor the code from the To-do list lab at the end of the first jQuery class.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, on the ul element, 
when the code first runs, and you don't have to add any 
other event listeners whenever someone adds an item.

Bonus: When the user clicks on each item, the item should 
turn bold. But the item should NOT turn bold when you click 
on the "complete task" link.

Bonus 2: Add another link, after each item, that allows you to delete the item.

*/

function addToList($list, thing) {
  var $thingLi = $('<li>').text(thing);
  $list.append($thingLi);
  addCompleteLinks($thingLi);
  // Bonus 2
  addDeleteLinks($thingLi);
}

function addCompleteLinks($lis) {
  var $completeLink = $('<span>').html(' complete task').addClass('complete-task');
  $lis.append($completeLink);
}

// Bonus 2: delete things
function addDeleteLinks($lis) {
  var $deleteLink = $('<span>').html(' delete task').addClass('delete-task');
  $lis.append($deleteLink);
}

$(document).ready(function() {
  
  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  var $thingListItems = $('#fav-list .fav-thing');

  addCompleteLinks($thingListItems);
  addDeleteLinks($thingListItems);

  // Delegated addition of click listener for clicks on 
  // "complete task" spans. Don't need to add it again each
  // time we add an item. 
  $thingList.on('click', '.complete-task', function(event) {
    // Bonus 1: stopPropagation() prevents clicks on "complete task" spans
    // from bubbling up and being caught by the
    // click listener on line 69 below that turns the whole 
    // list item bold.
    event.stopPropagation();
    $(this).parent().addClass('completed');
  });

  // Bonus 2: delete things
  $thingList.on('click', '.delete-task', function(event) {
    $(this).parent().remove();
  });


  // Bonus 1
  $thingList.on('click', '.fav-thing', function(event) {
    $(this).addClass('bold-me');
  });

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});

