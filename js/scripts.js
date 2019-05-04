function getGeoCoord() {
  
  var googleGeoAPIurl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDSAyYgB2bl7vqRqgyijrdweVbdjcBzF0U';
    jQuery.post(googleGeoAPIurl, function(success) {
      var crd = success.location;      
      getWeatherData(crd.lat, crd.lng);
    })
    .fail(function(err) {
      alert("API Geolocation error! \n\n" + err);
    });
}

// I pass the getCoord() results to getWeatherData() to get weather data

function getWeatherData(lat, lon) {
  
  var weatherDataURL = 'https://api.apixu.com/v1/current.json?key=86f5eced1312429cac2174953170101&q=' + lat + ',' + lon;

  $.ajax({
    
    dataType: "json",
    url: weatherDataURL,
    success: function(data) {
      
      $('.location').html(data.location.name);
      $('.temp-value').html(data.current.temp_c);
      $('.weather-icon').attr({src: data.current.condition.icon});
      $('.weather-current').html(data.current.condition.text);
    },
    
    error: function() {
      console.log("error happened");
    }
    
  });
}

getGeoCoord();
