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
}

function addCompleteLinks($lis) {
  var $completeLink = $('<span>').html(' complete task').addClass('complete-task');
  $lis.append($completeLink);

  $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

$(document).ready(function() {
  
  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  var $thingListItems = $('#fav-list .fav-thing');
  addCompleteLinks($thingListItems);

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

