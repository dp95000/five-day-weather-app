// Main Javascript File

// Get user's current geocoordinates for displaying local weather forcast

function getLocation() {
    var x = document.getElementById("recent-search");
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
   lat = position.coords.latitude;
   lon =  position.coords.longitude;
   console.log(lat);
   console.log(lon);

   var APIkey = "d95fc1da79853f3038b9424209b7d6ab"
   //var weather = $(this).attr("data-name");
   var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=39.95&lon=-75.16&appid=" + APIkey;
   var localWeatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=d95fc1da79853f3038b9424209b7d6ab";
   
   function localWeather(){
       $.ajax({
           url: localWeatherURL,
           method: "GET"
         }).then(function(localResponse) {
           console.log(localResponse);
           var localCity = localResponse.city.name;
           $("#local-area").prepend(localCity);
       });
   }
   
   localWeather();
  }

  getLocation();
 // showPosition();
  // console.log("test");









/*

function displayWeatherSearchInfo() {

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

    console.log(response);

    // Creating a div to hold the movie
    var weatherDiv = $("<div class='recent-city'>");

    // Display the returned information in the recent search block
    $("local-weather").prepend(weatherDiv);
    });

}

 // This function handles events where a movie button is clicked
 $("search-button").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var city = $("#search-field").val().trim();

    // Adding city from the textbox to our array
    cities.push(city);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".movie-btn", displayWeatherSearchInfo);

  // Calling the renderButtons function to display the initial buttons
 // renderButtons();

 */