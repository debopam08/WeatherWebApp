let api_key = '9290e4e54c2f02775d258dee8e6d46eb';

$( "#btnClick" ).on( "click", function() {
    var city_val = $('.searchbar').val();
    
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city_val+"&units=metric&appid="+api_key, function(data) {
        
        // console.log(data);   

        const cityname = data.name;
        const main_temp = data.main;
        const windsp    = data.wind;
        const sun       = data.sys;
        const weather   = data.weather[0];

        $('.weather').removeClass('loading');

        $(".city").text('Weather in '+cityname);
        $(".icon").attr('src',"https://openweathermap.org/img/wn/" + weather.icon + ".png");
        $(".description").text(weather.description);
        $(".temp").text(main_temp.temp + "°C");
        $(".humidity").text("Humidity: " + main_temp.humidity + "%");
        $(".wind").text("Wind speed: " + windsp.speed + " km/h");
        $(".feels_like").text("Feels Like: " + main_temp.feels_like + "°C");
        $(".temp_max").text("Max Temperature: " + main_temp.temp_max + "°C");
        $(".temp_min").text("Min Temperature: " + main_temp.temp_min + "°C");
    });
});

$( ".searchbar" ).on( "keyup", function(e) {
    if(e.key == "Enter"){
        $("#btnClick").trigger("click");
    }
});