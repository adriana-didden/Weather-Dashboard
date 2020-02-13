
$("#find-city").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-input").val();

    var APIKey = "8e9ec42762f02540fd0a774a11d58c6b";

    var queryURL ="api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8e9ec42762f02540fd0a774a11d58c6b";
    
    
});