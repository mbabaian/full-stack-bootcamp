// //function to change text
// function modifySquare() {
//   var td = document.getElementsByTagName("td");
//   if (td.textContent == " ") {
//     td.textContent = "X";
//   }
//   else if (td.textContent == "X") {
//     td.textContent = "O";
//   }
//   else if (td.textContent == "O") {
//     td.textContent = " ";
//   }
// }
//
// // add event listener
//
// var element = document.getElementsByTagName("td");
// element.addEventListener("click", modifySquare);
// modifySquare();


// Restart Game Button
var restart = document.querySelector("#b")


// Get the squares
var squares = document.querySelectorAll('td')

// Clear the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener("click", clearBoard);

// Check the square marker

function modifySquare() {
  if(this.textContent === '') {
    this.textContent = 'X';
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
}

// For loop to add event listers to all the squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', modifySquare)
}
