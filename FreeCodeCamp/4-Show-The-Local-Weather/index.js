$(document).ready(function() {
  // get units or set to default (imperial)
  var units = getQueryStringParam('units') || 'imperial'; 
  updateQueryParam('units', units);

  getLatitude(function(lat, lon) {
    getWeather(lat, lon);
  });
});

// set 'units' default to 'imperial'
$("input[name='units']").on('click', function() {
  updateQueryParam('units', this.value);
  getLatitude(function(lat, lon) {
    getWeather(lat, lon);
  });
});

function getLatitude(callback) {
  // if geolocation isn't working, use hardcoded values
  // var latitude = 39.8774533;
  // var longitude = -105.03820759999999;
  // callback(latitude, longitude);
  // return;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      callback(position.coords.latitude, position.coords.longitude);
    }, function (err) {
      console.log(err);
    }, {
      timeout:1000
    });
  } else {
    alert('Geolocation is not supported for this Browser/OS.');
  }
}

function getWeather(latitude, longitude) {
  var units = getQueryStringParam('units');
  $.getJSON("https://api.wunderground.com/api/15d66360d3f40c79/conditions/forecast/q/" + latitude + "," + longitude + ".json", function(res) {
    // weather
    var current = res.current_observation;
    // console.log(current);
    var backgrounds = {
      'Clear': 'https://www.dropbox.com/s/dxknrunkamitrxi/clear.jpg?raw=1',
      'Partly Cloudy': 'https://www.dropbox.com/s/0fcwypss3v2bkz1/partly_cloudy.jpg?raw=1',
      'Mostly Cloudy': 'https://www.dropbox.com/s/klzga3t3qu4et6q/mostly_cloudy.jpg?raw=1',
      'Sunny': 'https://www.dropbox.com/s/82ql1g0mbio0c3p/sunny.jpg?raw=1',
      'Rain': 'https://www.dropbox.com/s/gmi71gp1dnv0m7t/rain.jpg?raw=1',
      'Snow': 'https://www.dropbox.com/s/h8kmzeb8um612vw/snow.jpg?raw=1',
      'Scattered Clouds': 'https://www.dropbox.com/s/8uxfgxan9oykbqm/scattered_clouds.jpg?raw=1'
    }
    
    $('body').css('background-image', "url('" + backgrounds[current.weather] + "')");
    $('#location').html(current.display_location.full);
    $('#conditions-icon').attr('src', current.icon_url.replace(/http/, 'https'));
    $('#conditions').html(current.weather);
    $('#wind-dir').html(current.wind_dir.substr(0,1));

    if (units === 'metric') {
      $('#temp').html(current.temp_c + '° C');
      $('#visibility').html(current.visibility_km + ' km');
      $('#wind-speed').html(current.wind_kph + ' kph');
    }
    if (units !== 'metric') {
      $('#temp').html(current.temp_f + '° F');
      $('#visibility').html(current.visibility_mi + ' mi');
      $('#wind-speed').html(current.wind_mph + ' mph');
    }

    // forecast
    var forecast = res.forecast.simpleforecast.forecastday;
    // console.log(forecast);
    for (var i=0; i < forecast.length; i++) {
      // print the weekday name for the last 2 days
      if (i > 1) { 
        $('#day' + (i+1) + ' .name').html(forecast[i].date.weekday);
      }
      // conditions
      $('#day' + (i+1) + ' .conditions-icon').attr('src', forecast[i].icon_url.replace(/http/, 'https'));
      $('#day' + (i+1) + ' .conditions').html(forecast[i].conditions);
      if (units === 'metric') {
        $('#day' + (i+1) + ' .high').html(forecast[i].high.celsius + '° C');
        $('#day' + (i+1) + ' .low').html(forecast[i].low.celsius + '° C');
      }
      if (units !== 'metric') {
        $('#day' + (i+1) + ' .high').html(forecast[i].high.fahrenheit + '° F');
        $('#day' + (i+1) + ' .low').html(forecast[i].low.fahrenheit + '° F');
      }
    }
  });
}

function getQueryStringParam(param) {
  var url = window.location.toString();
  url.match(/\?(.+)$/);
  var params = RegExp.$1;
  params = params.split("&");
  var queryStringList = {};
  for(var i = 0; i < params.length; i++) {
    var tmp = params[i].split("=");
    queryStringList[tmp[0]] = unescape(tmp[1]);
  }
  return queryStringList[param];
}

function updateQueryParam(key, value) {
  var uri = window.location.toString();
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    uri = uri + separator + key + "=" + value;
  }
  window.history.pushState({path:uri},'',uri);
}
