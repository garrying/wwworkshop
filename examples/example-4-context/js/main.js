// Start of JavaScript

// Console.log outputs a message to your inspect tool
// If you see this in your Console, there's a good chance that this file has been linked correctly

console.log('Welcome to Developer Tools. JavaScript loaded from main.js!');

// Two variables selecting two buttons in index.html
// Both are looking elements with their respective classes
// The name of the variables are arbitrary, but should be consistent
// AVOID: Using spaces for variables

var myButtonChange = document.querySelector('.button-change');
var myButtonReset = document.querySelector('.button-reset');

// Using the dot notation, a click listener is added to the button that will visually change the page
// The function after the click contains a single argument that could be used
// Using the argument is optional, but helpful for more complex events

myButtonChange.addEventListener('click', function( event ) {
  // Using the querySelector, we are changing the <body> tag to use inline CSS
  // The CSS is written as declarations since the element is implied

  document.querySelector('body').style.cssText = 'background: #ff0; color: #00f';
});

// A click listener is added to the button that will reset the page's style

myButtonReset.addEventListener('click', function( event ) {
  // The existing Style attribute in <body> will be replaced with this value

  document.querySelector('body').style.cssText = 'background: #fff';
});
