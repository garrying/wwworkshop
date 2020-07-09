// Start of JavaScript

// Console.log outputs a message to your inspect tool
// If you see this in your Console, there's a good chance that this file has been linked correctly

console.log('Welcome to Developer Tools. JavaScript loaded from main.js!');

// Using the dot notation (similar to css), a click listener is added to the button that will visually change the page

$('.button-change').on('click', function(){
  // CSS will be added to <body>
  $('body').css('background', '#ff0')
  // More CSS to add to the <body>
  $('body').css('color', '#00f')
})

// A click listener is added to the button that will reset the page's style

$('.button-reset').on('click', function(){
  // Change the body background back to white
  $('body').css('background', '#fff')
})
