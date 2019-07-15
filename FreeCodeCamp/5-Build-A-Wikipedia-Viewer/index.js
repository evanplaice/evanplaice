// autocomplete suggest on key-up
//   reference(s):
//   - http://api.jqueryui.com/autocomplete/#method-close
$("#search").autocomplete({
  source: (req, res) => { 
    autocomplete(req, res);
  },
  minLength: 3,
  delay: 500
}); 

// search the term, debounced to avoid request thrashing
//   reference(s):
//   - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
$('#search').keyup($.debounce(250, (e) =>  {
  if(e.which == 13) {
    var term = $('#search').val();
    search(term);
  }
}));

$('#search-button').on('click', () => {
  var term = $('#search').val();
  search(term);
});

$('#random-button').on('click', () => {
  random();
});

// autocomplete the input
//   reference(s):
//   - https://w3lessons.info/2015/03/01/autocomplete-search-using-wikipedia-api-and-jquery-ui/
function autocomplete(request, response) {
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    dataType: "jsonp",
    data: {
      'action': "opensearch",
      'format': "json",
      'search': request.term
    },
    success: function(data) {
      response(data[1]);
    }
  });
}

// search the input
function search(term) {
  $('#search').autocomplete("close");
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    dataType: "jsonp",
    data: {
      'action': "opensearch",
      'format': "json",
      'search': term
    },
    success: function(data) {
      update(data);
    }
  });
}

// generate a random search input
//   reference(s)
//   - https://www.mediawiki.org/wiki/API:Random
//   - https://en.wikipedia.org/wiki/Wikipedia:Namespace
function random() {
  $('#search').autocomplete("close");
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    dataType: "jsonp",
    data: {
      'action': "query",
      'format': "json",
      'list': "random",
      'rnnamespace': 0,
      'rnredirect': true
    },
    success: function(data) {
      // console.log(data);
      $('#search').val(data.query.random[0].title);
    }
  });
}

function update(data) {
  // console.log(data);
  // clear any previous results
  $('#results').empty();
  // build the results list
  for(var i=0; i < data[1].length; i++) {
    $('#results').append(`
    <a href="${data[3][i]}">
      <div class="well">
        <h3>${data[1][i]}</h3>
        <p>${data[2][i]}</p>
      </div>
    </a>
    `);
  }
}
