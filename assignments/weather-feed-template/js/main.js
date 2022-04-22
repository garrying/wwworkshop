// The url that will retrieve the data.
// Change the query to the city you want to display
// See https://garden-weather-api.vercel.app/ for examples
var apiQuery = 'https://garden-weather-api.vercel.app/weather/toronto'

// Use what's the <template> element in index.html as the template
var template = $('#template').html()

// Use jQuery to get the data
$.get(apiQuery, function (data) {
  // These variables are to make accessing the data more understandable in the template.
  var location = data
  var weather = data.weather[0]
  var sun = data.sys
  var current = data.main

  // Use the template from index.html
  var element = eval('`' + template + '`')
  // Insert the filled in template to the page when the data is ready
  $('.weather-display').append(element)
})
