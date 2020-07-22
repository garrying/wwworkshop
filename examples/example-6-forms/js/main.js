// Listen for a submit event from a form element
$('form').submit(function(event) {

  // Get the values of the <input> elements using the .val() method
  var name = $('#name-field').val()
  var message = $('#message-field').val()

  // Create a new message element with the values above and preprend it to the .message-feed div
  $('.message-feed').prepend(
    // A new div for each post made
    '<div class="message-container">' +
       // Element for the name field
      '<div class="name">' + name + '</div>' +
      // Element for the message field
      '<div class="message">' + message + '</div>' +
    '</div>'
  )

  // Prevent the form event from posting to a server
  event.preventDefault();
});


// Listen for a click on the menu button when in mobile view
$('#menu-button').on('click', function(){
  // Toggle an active class to show and hide the menu when the button is clicked
  $('.desktop-menu').toggleClass('active')
})
