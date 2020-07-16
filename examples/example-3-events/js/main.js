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

// Listen to a scroll event and do something when I scroll down 600px

$('body').on("mousewheel", function() {
  console.log($(document).scrollTop());
  if ($(document).scrollTop() >= 600) {
    $('body').css('background', '#00f')
  } else {
    $('body').css('background', '#fff')
  }
});

// Listen to key press of "a" or "b" and do something else depending on which key is pressed

$('body').on('keydown', function(event){
  if (event.key === 'a') {
    $('.subtitle').addClass('asdf')
    // $('.subtitle').css('transform', 'scale(0.5)')
  } else if (event.key === 'b') {
    $('.subtitle').removeClass('asdf')
    // $('.subtitle').css('transform', 'scale(1)')
  }
})

// Listen to where my mouse moves and do something if my cursor moves beyond 1000px to the right

$('body').on('mousemove', function(event){
  $('#cursor-position').html(event.pageX)
  if (event.pageX >= 1000) {
    $('body').css('background', '#f00')
  } else {
    $('body').css('background', '#fff')
  }
})

// Generate a random number between 1 and 100. Display that number on my page.

$('.random-number').html(Math.floor((Math.random() * 100) + 1))

// Create a function to create a random color and apply it to the background

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  $('body').css('background', bgColor)
}

// Click a button to apply a random color to the background

$('.button-random').on('click', function(){
  random_bg_color()
})
