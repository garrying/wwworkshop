// Start of JavaScript

// Console.log outputs a message to your inspect tool
// If you see this in your Console, there's a good chance that this file has been linked correctly

console.log('Welcome to Developer Tools. JavaScript loaded from main.js!');

$.ajax({
  // Retrieve data from News API through a special URL (Endpoint)
  url: "https://gnews.io/api/v3/search?q=toronto&image=required&token=d94bc2a40e081c5e0348456186c1d06b"
}).done(function( data ) {
  // After we have retrieved the data, display the data in the browser's console
  console.log(data);
  // Take each article from the source and perform a function to each
  data.articles.map(function(article){
    // Display all the content in a div with the class of article.
    //
    // Append each article from the API in the following format where instances of ${article.propery}
    // are properties of the article we can display.
    $('.article').append(`
      <div class="article-item">
        <img src="${article.image}" />
        <a href="${article.url}"><h1 class="item">${article.title}</h1></a>
        <p>&mdash;${article.source.name}</p>
        <p>${article.description}</p>
        <a href="${article.url}" class="readmore-link">Read More</a>
      </div>
    `);
  });
});
