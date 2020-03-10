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
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(res) {
    var quote = res[0].content.replace(/<p>|<\/p>/g, '');
    var cite = res[0].title;
    $("#quote").html(quote);
    $("#cite").html(cite);
    var twitterHref = 'https://twitter.com/intent/tweet?text=' + quote + ' - ' + cite;
    $("#twitter").attr("href", twitterHref);

  });
}
