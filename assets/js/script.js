
var APIKey = "8e9ec42762f02540fd0a774a11d58c6b";

var previousSearch = localStorage.getItem("weather")


if (previousSearch) {
    printPrevious()
} else {
    previousSearch = []
}
function printPrevious() {
   var previousDiv =  $("#pre").html("")
   var UL = $("<ul>").addClass("list-unstyled table-hover")
   for (let i = 0; i < previousSearch.length; i++) {
      var li = $("<li>").addClass("btn card")

      li.attr("onclick", "getWeather('"+previousSearch[i]+"')")
        li.text(previousSearch[i])
        UL.append(li)

   }
   console.log(UL)
   previousDiv.append(UL)
}



$("#find-city").on("click", function (event) {
    var cityDiv = $("<div class='movie'>");

    event.preventDefault();

    var city = $("#city-input").val();
    previousSearch.push(city)
    printPrevious()
    getWeather(city)
})

function getWeather(city){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=8e9ec42762f02540fd0a774a11d58c6b";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        printWeather(response)
    });

}
function printWeather(weather) {
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + weather.coord.lat + "&lon=" + weather.coord.lon
    $.get(queryURL).then(function (results) {
        console.log(results)
        var cityView = $("#city-view")
        var newDiv = $("<div>").addClass("card p-2 mt-2")
        var title = $("<h1>" + weather.name + "</h1>");
        var image = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png")
        title.append(image)
        var temp = $("<div>").text("Temperature (F) " + weather.main.temp);
        var humid = $("<div>").text("Humidity: " + weather.main.humidity);
        var wind = $("<div>").text("Wind Speed: " + weather.wind.speed);
        var UV = $("<div>").text("UV: " + results.value)

        newDiv.append(title, temp, humid, wind, UV)
        console.log(newDiv);

        cityView.append(newDiv)
    })

}

