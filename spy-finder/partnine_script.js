//////////////////////////////////////////////////////////
//              CRITERIA FOR SPY                        //
//  if firstName[0] === lastName[0]                     //
//  if age > 20 && age < 30                             //
//  if height >= 170                                    //
//  if petName[-1] === y                                //
//  if spy print "Welcome, comrade! Your identity has   //
//  has been verified."                                 //
//  if not spy print "Sorry. You must have you confused //
//    with someone else."                               //
//////////////////////////////////////////////////////////


var firstName = prompt("What is your name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?")
var height = prompt("How tall are you (in centimeters)?")
var petName = prompt("What is your pet's name?")
var lastLetter = petName[petName.length-1];

if
((firstName[0] === lastName[0]) && (age > 20 && age < 30)
      && (height >= 170) && (lastLetter === "y")) {
      console.log("Welcome, comrade! Your identity has been verified.");
    }
else {
  console.log("Pardon me. I thought you were someone else.");
  }
