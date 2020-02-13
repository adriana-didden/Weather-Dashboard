
$("#find-city").on("click", function (event) {
    event.preventDefault();

    var city = $("#city-input").val();

    var APIKey = "8e9ec42762f02540fd0a774a11d58c6b";

    var queryURL ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8e9ec42762f02540fd0a774a11d58c6b";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#city-view").text(JSON.stringify(response));
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".temp").text("Temperature (F) " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".wind").text("Wind Speed: " + response.wind.speed);


    });
    
});