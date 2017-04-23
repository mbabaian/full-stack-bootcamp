// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks
function quit() {
  break;
}
// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
  var newName = roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(name) {
  console.log(roster());
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display() {
  console.log(roster);
}

// Start by asking if they want to use the web app
  prompt("Would you like to start the roster web app? y/n");

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while true {
  prompt("Would you like to add, remove, display or quit?");
}

//if user wants to remove name, get name
if (remove === true) {
  prompt("Which name would you like to remove?")
  return name;
  var index = roster.indexOf(name);
  roster.splice(index, 1);
}

alert("Thank you for using the web app. Please refresh to start over.")
