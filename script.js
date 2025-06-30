// // Output
// const output = document.getElementById('output');
// // Silver buttons
// const clear = document.getElementById('clear');
// const posOrneg = document.getElementById('posOrneg');
// const percent = document.getElementById('percent');
// // Number buttons
// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
// const four = document.getElementById('four');
// const five = document.getElementById('five');
// const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');
// const nine = document.getElementById('nine');
// const zero = document.getElementById('zero');
// const point = document.getElementById('point');
// // Operator buttons
// const divide = document.getElementById('divide');
// const multiply = document.getElementById('multiply');
// const add = document.getElementById('add');
// const minus = document.getElementById('minus');
// const equal = document.getElementById('equal');


// const allButtons = document.querySelectorAll('.btns');

// allButtons.forEach(button => {
//   button.addEventListener('click', mazeYou);
// });

// function mazeYou(){
//     let message = output.innerHTML = 'I Miss You, Baby :<';
//     message = output.style.fontSize = '50px';
//     return message;
// }


const output = document.getElementById('output');

// Get all calculator buttons
const buttons = [
  document.getElementById('clear'),
  document.getElementById('posOrneg'),
  document.getElementById('percent'),
  document.getElementById('one'),
  document.getElementById('two'),
  document.getElementById('three'),
  document.getElementById('four'),
  document.getElementById('five'),
  document.getElementById('six'),
  document.getElementById('seven'),
  document.getElementById('eight'),
  document.getElementById('nine'),
  document.getElementById('zero'),
  document.getElementById('point'),
  document.getElementById('divide'),
  document.getElementById('multiply'),
  document.getElementById('add'),
  document.getElementById('minus'),
  document.getElementById('equal')
];

// Add event listener to each button
buttons.forEach(button => {
  if (button) {
    button.addEventListener('click', function() {
      // First clear the output
      output.innerHTML = '';
      output.style.fontSize = ''; // Reset font size
      
      // Then set a delay before showing message again
      setTimeout(mazeYou, 1000); // 1000ms = 1 second delay
    });
  }
});

function mazeYou() {
  output.innerHTML = 'I Miss You, Baby :<';
  output.style.fontSize = '50px';
}