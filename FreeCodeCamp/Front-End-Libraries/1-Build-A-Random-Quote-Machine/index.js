$(document).ready(function() {
  // disable caching of AJAX requests
  $.ajaxSetup({ cache: false });
  
  // fetch a quote when the page loads
  getQuote();
  
  // fetch a new quote when the 'New Quote' button is pressed
  $("#new-quote").on("click", function() {
    getQuote();
  });
});

function getQuote() {
  $.getJSON("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1", function(res) {
    var quote = res[0].content.rendered.replace(/<p>|<\/p>/g, '');
    $("#text").html(quote);

    var cite = res[0].title.rendered;
    $("#author").html(cite);
    
    var twitterHref = `https://twitter.com/intent/tweet?text=${quote}- ${cite}`;
    $("#tweet-quote").attr("href", twitterHref);
  });
}
