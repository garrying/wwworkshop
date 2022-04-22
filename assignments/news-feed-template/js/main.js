// The url that will retrieve the data.
// Change the query to reflect the kinds of headlines you're looking to present
// See https://news.wwworkshop.org for examples
var apiQuery = 'https://news.wwworkshop.org/top-headlines?country=ca'

// Use what's the <template> element in index.html as the template
var template = $('#template').html()

// Use jQuery to get the data
$.get(apiQuery, function (data) {
  // For every article we get back from news.wwworkshop.org perform the following function
  data.articles.forEach(function (article) {
    // Use the template in from line 6 and insert the article data
    var element = eval('`' + template + '`')
    // Add the article to the div with the class of article-feed
    $('.articles-feed').append(element)
  })
})
